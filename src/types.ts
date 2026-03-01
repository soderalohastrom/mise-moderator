export interface RunoffResult {
  model: string;
  label: string;
  tier: string;
  params: string;
  response: string;
  latency_ms: number;
}

export interface ModerationJudgment {
  on_topic: boolean;
  confidence: number;
  suggested_forum: string | null;
  reason: string;
}

export interface ModelScore {
  model: string;
  label: string;
  tier: string;
  correct: number;
  total: number;
  accuracy: number;
  avg_latency: number;
  json_reliability: number;
  avg_confidence: number;
}

export interface RunoffResponse {
  results: RunoffResult[];
}

export interface TestRun {
  id: string;
  timestamp: number;
  postedForumId: string;
  postTitle: string;
  postBody: string;
  isOffTopic: boolean;
  correctForumId: string | null; // if off-topic, where it should go
  results: ModerationResult[];
}

export interface ModerationResult {
  model: string;
  label: string;
  tier: string;
  latency_ms: number;
  raw_response: string;
  parsed: ModerationJudgment | null;
  json_valid: boolean;
  correct: boolean;
}
