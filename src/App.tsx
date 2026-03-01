import { useState, useCallback } from 'react';
import { FORUMS, type Forum } from './data/forums';
import { SEED_POSTS, type SeedPost } from './data/seed-posts';
import { runModeration, scoreResults, generatePost, ALL_MODELS } from './lib/runoff';
import type { TestRun, ModelScore } from './types';
import { FlameKindling, Send, BarChart3, MessageSquareWarning, ChevronDown, ChevronRight, CheckCircle2, XCircle, AlertTriangle, Loader2, Trash2, Shuffle } from 'lucide-react';

function App() {
  const [view, setView] = useState<'forums' | 'leaderboard'>('forums');
  const [selectedForum, setSelectedForum] = useState<Forum | null>(null);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [targetForum, setTargetForum] = useState('');
  const [isOffTopic, setIsOffTopic] = useState(true);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [testRuns, setTestRuns] = useState<TestRun[]>([]);
  const [expandedRun, setExpandedRun] = useState<string | null>(null);
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  const forumPosts = useCallback((forumId: string) =>
    SEED_POSTS.filter(p => p.forumId === forumId), []);

  const handleSubmitPost = async () => {
    if (!selectedForum || !postTitle.trim() || !postBody.trim()) return;
    setLoading(true);

    try {
      const results = await runModeration(selectedForum.id, postTitle, postBody);
      const correctForumId = isOffTopic ? targetForum || null : null;
      const scored = scoreResults(results, isOffTopic, correctForumId);

      const run: TestRun = {
        id: `run-${Date.now()}`,
        timestamp: Date.now(),
        postedForumId: selectedForum.id,
        postTitle,
        postBody,
        isOffTopic,
        correctForumId,
        results: scored,
      };

      setTestRuns(prev => [run, ...prev]);
      setExpandedRun(run.id);
      setPostTitle('');
      setPostBody('');
    } catch (err) {
      console.error('Runoff failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePost = async () => {
    if (!selectedForum) return;
    setGenerating(true);
    try {
      const { title, body } = await generatePost(
        selectedForum.id,
        isOffTopic,
        isOffTopic ? targetForum || undefined : undefined
      );
      setPostTitle(title);
      setPostBody(body);
    } catch (err) {
      console.error('Generate failed:', err);
    } finally {
      setGenerating(false);
    }
  };

  const leaderboard = computeLeaderboard(testRuns);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FlameKindling className="w-7 h-7 text-amber-500" />
            <div>
              <h1 className="text-lg font-bold tracking-tight">Mise Moderator</h1>
              <p className="text-xs text-zinc-500">LLM Moderation Benchmark · Hoʻokūkū Ao</p>
            </div>
          </div>
          <nav className="flex gap-1">
            <button
              onClick={() => setView('forums')}
              className={`px-3 py-1.5 text-sm rounded-lg transition ${view === 'forums' ? 'bg-amber-500/20 text-amber-400' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              <MessageSquareWarning className="w-4 h-4 inline mr-1.5" />Forums
            </button>
            <button
              onClick={() => setView('leaderboard')}
              className={`px-3 py-1.5 text-sm rounded-lg transition ${view === 'leaderboard' ? 'bg-amber-500/20 text-amber-400' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              <BarChart3 className="w-4 h-4 inline mr-1.5" />Leaderboard
              {testRuns.length > 0 && (
                <span className="ml-1.5 bg-amber-500/30 text-amber-300 text-xs px-1.5 py-0.5 rounded-full">{testRuns.length}</span>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {view === 'forums' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Forum List */}
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">12 Forums</h2>
              {FORUMS.map(forum => (
                <button
                  key={forum.id}
                  onClick={() => { setSelectedForum(forum); setTargetForum(''); }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg transition flex items-center gap-3 ${
                    selectedForum?.id === forum.id
                      ? 'bg-amber-500/15 border border-amber-500/30 text-amber-100'
                      : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300'
                  }`}
                >
                  <span className="text-xl">{forum.emoji}</span>
                  <div className="min-w-0">
                    <div className="font-medium text-sm truncate">{forum.name}</div>
                    <div className="text-xs text-zinc-500 truncate">{forum.description}</div>
                  </div>
                  <span className="ml-auto text-xs text-zinc-600">{forumPosts(forum.id).length}</span>
                </button>
              ))}
            </div>

            {/* Forum Detail + Post Form */}
            <div className="lg:col-span-2 space-y-4">
              {selectedForum ? (
                <>
                  {/* Forum Header */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{selectedForum.emoji}</span>
                      <h2 className="text-xl font-bold">{selectedForum.name}</h2>
                    </div>
                    <p className="text-sm text-zinc-400">{selectedForum.guidelines}</p>
                  </div>

                  {/* Existing Posts */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-zinc-500">Seed Posts ({forumPosts(selectedForum.id).length})</h3>
                    <div className="grid gap-2 max-h-64 overflow-y-auto pr-1">
                      {forumPosts(selectedForum.id).map(post => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </div>

                  {/* Moderation Test Form */}
                  <div className="bg-zinc-900 border border-amber-500/30 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <h3 className="text-sm font-semibold text-amber-400">Moderation Test — Post to {selectedForum.name}</h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={isOffTopic}
                          onChange={e => setIsOffTopic(e.target.checked)}
                          className="accent-amber-500"
                        />
                        <span className={isOffTopic ? 'text-red-400' : 'text-green-400'}>
                          {isOffTopic ? '🎯 Off-topic (models should flag this)' : '✅ On-topic (models should approve)'}
                        </span>
                      </label>
                    </div>

                    {isOffTopic && (
                      <div>
                        <label className="text-xs text-zinc-500 block mb-1">Correct forum (where it actually belongs)</label>
                        <select
                          value={targetForum}
                          onChange={e => setTargetForum(e.target.value)}
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200"
                        >
                          <option value="">— Select correct forum —</option>
                          {FORUMS.filter(f => f.id !== selectedForum.id).map(f => (
                            <option key={f.id} value={f.id}>{f.emoji} {f.name}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Title row with Generate button */}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Post title..."
                        value={postTitle}
                        onChange={e => setPostTitle(e.target.value)}
                        className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600"
                      />
                      <button
                        onClick={handleGeneratePost}
                        disabled={generating || loading}
                        title="Generate a random post with an edge LLM"
                        className="shrink-0 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 border border-zinc-700 hover:border-zinc-500 rounded-lg transition flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200"
                      >
                        {generating
                          ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Generating…</>
                          : <><Shuffle className="w-3.5 h-3.5" /> Generate Post</>
                        }
                      </button>
                    </div>
                    <textarea
                      placeholder="Post body… (type your own or hit Generate Post ↑)"
                      value={postBody}
                      onChange={e => setPostBody(e.target.value)}
                      rows={3}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 resize-none"
                    />
                    <button
                      onClick={handleSubmitPost}
                      disabled={loading || !postTitle.trim() || !postBody.trim()}
                      className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white font-medium py-2.5 rounded-lg transition flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Firing Runoff...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Fire at {ALL_MODELS.length} Models</>
                      )}
                    </button>
                  </div>

                  {/* Test Run Results */}
                  {testRuns.filter(r => r.postedForumId === selectedForum.id).map(run => (
                    <RunResults
                      key={run.id}
                      run={run}
                      expanded={expandedRun === run.id}
                      onToggle={() => setExpandedRun(expandedRun === run.id ? null : run.id)}
                      expandedModel={expandedModel}
                      onToggleModel={(m) => setExpandedModel(expandedModel === m ? null : m)}
                    />
                  ))}
                </>
              ) : (
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center">
                  <FlameKindling className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
                  <p className="text-zinc-500">Select a forum to begin testing</p>
                  <p className="text-xs text-zinc-600 mt-1">Write an off-topic post and see which LLMs catch it</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Leaderboard scores={leaderboard} testRuns={testRuns} onClear={() => setTestRuns([])} />
        )}
      </main>
    </div>
  );
}

function PostCard({ post }: { post: SeedPost }) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-800 rounded-lg px-3 py-2">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-zinc-300">{post.title}</span>
      </div>
      <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">{post.body}</p>
      <span className="text-xs text-zinc-600">u/{post.author}</span>
    </div>
  );
}

function RunResults({
  run, expanded, onToggle, expandedModel, onToggleModel
}: {
  run: TestRun;
  expanded: boolean;
  onToggle: () => void;
  expandedModel: string | null;
  onToggleModel: (m: string) => void;
}) {
  const correct = run.results.filter(r => r.correct).length;
  const total = run.results.length;
  const jsonValid = run.results.filter(r => r.json_valid).length;
  const forum = FORUMS.find(f => f.id === run.postedForumId);
  const correctForum = run.correctForumId ? FORUMS.find(f => f.id === run.correctForumId) : null;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <button onClick={onToggle} className="w-full px-4 py-3 flex items-center gap-3 hover:bg-zinc-800/50 transition">
        {expanded ? <ChevronDown className="w-4 h-4 text-zinc-500" /> : <ChevronRight className="w-4 h-4 text-zinc-500" />}
        <div className="text-left min-w-0 flex-1">
          <div className="text-sm font-medium truncate">
            {run.isOffTopic ? '🎯' : '✅'} "{run.postTitle}"
          </div>
          <div className="text-xs text-zinc-500">
            Posted to {forum?.emoji} {forum?.name}
            {correctForum && <> · Belongs in {correctForum.emoji} {correctForum.name}</>}
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className={correct === total ? 'text-green-400' : correct > total / 2 ? 'text-amber-400' : 'text-red-400'}>
            {correct}/{total} correct
          </span>
          <span className="text-zinc-600">{jsonValid}/{total} JSON</span>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-zinc-800 divide-y divide-zinc-800/50">
          {run.results.map(r => (
            <div key={r.model}>
              <button
                onClick={() => onToggleModel(`${run.id}-${r.model}`)}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-zinc-800/30 transition text-sm"
              >
                {r.correct ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                )}
                <span className="font-medium text-zinc-300 w-40 text-left truncate">{r.label}</span>
                <span className="text-xs text-zinc-600 w-16">{r.tier}</span>
                <span className="text-xs text-zinc-500 w-16">{r.latency_ms}ms</span>
                {r.parsed ? (
                  <span className={`text-xs px-2 py-0.5 rounded ${r.parsed.on_topic ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {r.parsed.on_topic ? 'On-topic' : 'Off-topic'}
                    {r.parsed.suggested_forum && ` → ${r.parsed.suggested_forum}`}
                  </span>
                ) : (
                  <span className="text-xs bg-zinc-700 text-zinc-400 px-2 py-0.5 rounded">Parse fail</span>
                )}
                <span className="ml-auto text-xs text-zinc-600">
                  {r.parsed ? `${(r.parsed.confidence * 100).toFixed(0)}%` : '—'}
                </span>
              </button>
              {expandedModel === `${run.id}-${r.model}` && (
                <div className="px-4 py-2 bg-zinc-800/30">
                  <pre className="text-xs text-zinc-400 whitespace-pre-wrap break-words max-h-40 overflow-y-auto">{r.raw_response}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Leaderboard({ scores, testRuns, onClear }: { scores: ModelScore[]; testRuns: TestRun[]; onClear: () => void }) {
  if (scores.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center">
        <BarChart3 className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
        <p className="text-zinc-500">No test runs yet</p>
        <p className="text-xs text-zinc-600 mt-1">Fire some moderation tests to build the leaderboard</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">🏆 Moderation Leaderboard</h2>
          <p className="text-sm text-zinc-500">{testRuns.length} test runs · {scores[0]?.total || 0} judgments per model</p>
        </div>
        <button onClick={onClear} className="text-xs text-zinc-500 hover:text-red-400 flex items-center gap-1 transition">
          <Trash2 className="w-3 h-3" /> Clear
        </button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-500 text-xs uppercase tracking-wider">
              <th className="text-left px-4 py-3">#</th>
              <th className="text-left px-4 py-3">Model</th>
              <th className="text-left px-4 py-3">Tier</th>
              <th className="text-right px-4 py-3">Accuracy</th>
              <th className="text-right px-4 py-3">JSON %</th>
              <th className="text-right px-4 py-3">Avg Latency</th>
              <th className="text-right px-4 py-3">Confidence</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s, i) => (
              <tr key={s.model} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="px-4 py-2.5 text-zinc-500 font-mono">{i + 1}</td>
                <td className="px-4 py-2.5 font-medium text-zinc-200">{s.label}</td>
                <td className="px-4 py-2.5">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    s.tier === 'budget' ? 'bg-green-500/20 text-green-400' :
                    s.tier === 'sweet-spot' ? 'bg-amber-500/20 text-amber-400' :
                    s.tier === 'heavy' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>{s.tier}</span>
                </td>
                <td className="px-4 py-2.5 text-right font-mono">
                  <span className={s.accuracy >= 80 ? 'text-green-400' : s.accuracy >= 50 ? 'text-amber-400' : 'text-red-400'}>
                    {s.accuracy.toFixed(0)}%
                  </span>
                </td>
                <td className="px-4 py-2.5 text-right font-mono text-zinc-400">{s.json_reliability.toFixed(0)}%</td>
                <td className="px-4 py-2.5 text-right font-mono text-zinc-400">{s.avg_latency.toFixed(0)}ms</td>
                <td className="px-4 py-2.5 text-right font-mono text-zinc-400">{(s.avg_confidence * 100).toFixed(0)}%</td>
                <td className="px-4 py-2.5">
                  <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${s.accuracy >= 80 ? 'bg-green-500' : s.accuracy >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                      style={{ width: `${s.accuracy}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function computeLeaderboard(runs: TestRun[]): ModelScore[] {
  if (runs.length === 0) return [];

  const modelMap = new Map<string, { label: string; tier: string; correct: number; total: number; latencies: number[]; jsonValid: number; confidences: number[] }>();

  for (const run of runs) {
    for (const r of run.results) {
      const entry = modelMap.get(r.model) || {
        label: r.label, tier: r.tier,
        correct: 0, total: 0, latencies: [], jsonValid: 0, confidences: [],
      };
      entry.total++;
      if (r.correct) entry.correct++;
      entry.latencies.push(r.latency_ms);
      if (r.json_valid) entry.jsonValid++;
      if (r.parsed) entry.confidences.push(r.parsed.confidence);
      modelMap.set(r.model, entry);
    }
  }

  return Array.from(modelMap.entries())
    .map(([model, d]) => ({
      model,
      label: d.label,
      tier: d.tier,
      correct: d.correct,
      total: d.total,
      accuracy: (d.correct / d.total) * 100,
      avg_latency: d.latencies.reduce((a, b) => a + b, 0) / d.latencies.length,
      json_reliability: (d.jsonValid / d.total) * 100,
      avg_confidence: d.confidences.length ? d.confidences.reduce((a, b) => a + b, 0) / d.confidences.length : 0,
    }))
    .sort((a, b) => b.accuracy - a.accuracy || a.avg_latency - b.avg_latency);
}

export default App;
