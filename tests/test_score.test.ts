import { calculateScore, scoreToGrade } from '../lib/score';

describe('Performance Scoring', () => {
  it('calculates weighted overall score', () => {
    const result = calculateScore({ attendance: 80, votingConsistency: 70, promiseFulfillment: 60, citizenSentiment: 75 });
    expect(result.overall).toBe(70); // 80*0.2 + 70*0.25 + 60*0.3 + 75*0.25
  });
  it('grades correctly', () => {
    expect(scoreToGrade(90)).toBe('A');
    expect(scoreToGrade(72)).toBe('B');
    expect(scoreToGrade(30)).toBe('F');
  });
});
