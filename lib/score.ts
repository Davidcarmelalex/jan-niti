/**
 * Jan-Niti — Representative Performance Scoring Engine
 */
export interface RepScore {
  attendance: number;       // 0–100
  votingConsistency: number; // 0–100
  promiseFulfillment: number; // 0–100
  citizenSentiment: number; // 0–100
  overall: number;          // weighted composite
}

export function calculateScore(components: Omit<RepScore, 'overall'>): RepScore {
  const weights = {
    attendance: 0.20,
    votingConsistency: 0.25,
    promiseFulfillment: 0.30,
    citizenSentiment: 0.25,
  };
  const overall = Math.round(
    components.attendance * weights.attendance +
    components.votingConsistency * weights.votingConsistency +
    components.promiseFulfillment * weights.promiseFulfillment +
    components.citizenSentiment * weights.citizenSentiment
  );
  return { ...components, overall };
}

export function scoreToGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
  if (score >= 85) return 'A';
  if (score >= 70) return 'B';
  if (score >= 55) return 'C';
  if (score >= 40) return 'D';
  return 'F';
}
