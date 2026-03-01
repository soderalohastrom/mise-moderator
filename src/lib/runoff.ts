import { FORUMS } from '../data/forums';
import type { RunoffResponse, ModerationResult, ModerationJudgment } from '../types';

const RUNOFF_URL = 'https://cloud-llama-edge.scott-c93.workers.dev/runoff';

const ALL_MODELS = [
  'granite-micro',
  'llama-1b',
  'llama-3b',
  'qwen3-moe',
  'llama-8b-fast',
  'glm-4.7-flash',
  'gemma-12b',
  'mistral-24b',
  'llama-4-scout',
  'gpt-oss-20b',
  'qwq-32b',
  'llama-70b-fast',
];

function buildSystemPrompt(forumId: string): string {
  const forum = FORUMS.find(f => f.id === forumId);
  const forumList = FORUMS.map(f => `- **${f.name}** (${f.id}): ${f.guidelines}`).join('\n');

  return `You are a content moderator for Mise, a hospitality industry forum platform. 

The post you are reviewing was submitted to the "${forum?.name}" forum.

Here are ALL the forums and their guidelines:
${forumList}

Your job: Determine if this post belongs in the "${forum?.name}" forum where it was posted.

Respond with ONLY valid JSON (no markdown, no explanation outside the JSON):
{
  "on_topic": true/false,
  "confidence": 0.0-1.0,
  "suggested_forum": "forum-id-here or null if on-topic",
  "reason": "Brief explanation of your decision"
}`;
}

function parseJudgment(raw: string): ModerationJudgment | null {
  try {
    // Try to extract JSON from the response (models sometimes wrap in markdown)
    const jsonMatch = raw.match(/\{[\s\S]*?\}/);
    if (!jsonMatch) return null;
    const parsed = JSON.parse(jsonMatch[0]);
    if (typeof parsed.on_topic !== 'boolean') return null;
    return {
      on_topic: parsed.on_topic,
      confidence: typeof parsed.confidence === 'number' ? parsed.confidence : 0.5,
      suggested_forum: parsed.suggested_forum || null,
      reason: parsed.reason || '',
    };
  } catch {
    return null;
  }
}

export async function runModeration(
  forumId: string,
  postTitle: string,
  postBody: string,
  models: string[] = ALL_MODELS
): Promise<ModerationResult[]> {
  const systemPrompt = buildSystemPrompt(forumId);
  const prompt = `POST TITLE: ${postTitle}\n\nPOST BODY: ${postBody}`;

  const response = await fetch(RUNOFF_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ system: systemPrompt, prompt, models }),
  });

  if (!response.ok) {
    throw new Error(`Runoff API error: ${response.status}`);
  }

  const data: RunoffResponse = await response.json();

  return data.results.map(r => {
    const parsed = parseJudgment(r.response);
    return {
      model: r.model,
      label: r.label,
      tier: r.tier,
      latency_ms: r.latency_ms,
      raw_response: r.response,
      parsed,
      json_valid: parsed !== null,
      correct: false, // scored later by the judge
    };
  });
}

export function scoreResults(
  results: ModerationResult[],
  isOffTopic: boolean,
  correctForumId: string | null
): ModerationResult[] {
  return results.map(r => {
    if (!r.parsed) return { ...r, correct: false };

    if (isOffTopic) {
      // Post IS off-topic: model should flag it as off-topic
      const caughtIt = !r.parsed.on_topic;
      const rightRedirect = correctForumId
        ? r.parsed.suggested_forum === correctForumId
        : true;
      return { ...r, correct: caughtIt && rightRedirect };
    } else {
      // Post IS on-topic: model should say it's on-topic
      return { ...r, correct: r.parsed.on_topic === true };
    }
  });
}

const GENERATE_MODEL = 'qwen3-moe'; // fast, good at structured JSON output

export async function generatePost(
  forumId: string,
  isOffTopic: boolean,
  targetForumId?: string
): Promise<{ title: string; body: string }> {
  const forum = FORUMS.find(f => f.id === forumId)!;
  const targetForum = targetForumId ? FORUMS.find(f => f.id === targetForumId) : null;

  const systemPrompt = isOffTopic
    ? `You are helping test a content moderation system for Mise, a restaurant industry forum.

Generate a realistic post written by a real hospitality professional that is INTENTIONALLY MISPOSTED to the "${forum.name}" forum (${forum.description})${targetForum ? `, but clearly belongs in the "${targetForum.name}" forum (${targetForum.description})` : ` but belongs in a completely different forum`}.

Make it subtle — authentic-sounding, not obviously wrong. The kind of post that trips up a careless moderator.`
    : `You are helping test a content moderation system for Mise, a restaurant industry forum.

Generate a realistic post written by a real hospitality professional that genuinely belongs in the "${forum.name}" forum (${forum.description}).

Make it feel authentic — specific details, real industry voice, no fluff.`;

  const prompt = `Write a forum post. Respond with ONLY valid JSON, no markdown fences:\n{"title": "short engaging post title", "body": "2-4 sentences of realistic post content"}`;

  const response = await fetch(RUNOFF_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ system: systemPrompt, prompt, models: [GENERATE_MODEL] }),
  });

  if (!response.ok) throw new Error(`Generate failed: ${response.status}`);

  const data: RunoffResponse = await response.json();
  const raw = data.results[0]?.response || '';

  const jsonMatch = raw.match(/\{[\s\S]*?\}/);
  if (!jsonMatch) throw new Error('Could not parse generated post');

  const parsed = JSON.parse(jsonMatch[0]);
  if (!parsed.title || !parsed.body) throw new Error('Invalid generated post format');

  return { title: String(parsed.title), body: String(parsed.body) };
}

export { ALL_MODELS };
