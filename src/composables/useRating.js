export const useRating = () => {
  const ratingClass = (score) => {
    if (score >= 40) return 'rating-critical';
    if (score >= 24) return 'rating-severe';
    if (score >= 9) return 'rating-moderate';
    return 'rating-acceptable';
  };

  const scoreTrend = (current, previous) => {
    if (current == null || previous == null) return null;
    if (current > previous) return 'up';
    if (current < previous) return 'down';
    return 'flat';
  };

  return { ratingClass, scoreTrend };
};
