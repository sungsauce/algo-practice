function iterativeLIS(seq) {
  const lengths = new Array(seq.length).fill(1);

  for (let i = 1; i < seq.length; i++) {
    for (let j = 0; j < i; j++) {

      const isIncreasing = seq[j] < seq[i];

      // what would be the sequence[i]'s sequence length if we added sequence[j]'s subsequence to it?
      // subsequence's length = sequence[j]'s longest subsquence + sequence[i]
      const sequenceLength = lengths[j] + 1;

      // is that subsequence LONGER than the longest subsequence we have saved for sequence[i]?
      const isLonger = sequenceLength > lengths[i];

      if (isIncreasing && isLonger) {
        lengths[i] = sequenceLength;
      }
    }
  }
  return Math.max(...lengths);
}

function longestIncreasingSubsequence (seq, i = 0, base = -Infinity) {
  // base case: when you've reached/exceeded the end of the sequence
  if (i === seq.length) return 0;

  const num = seq[i];
  const whenExcluded = longestIncreasingSubsequence(seq, i + 1, base);

  // base case: when 
  if (num <= base) return whenExcluded;
  const whenIncluded = 1 + longestIncreasingSubsequence(seq, i + 1, num);
  return Math.max(whenIncluded, whenExcluded);
}

console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]))
