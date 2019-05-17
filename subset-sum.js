// Given a target sum and an array of positive integers,
// return true if any combination of numbers in the array can add to the target.
// Each number in the array may only be used once.
// Return false if the numbers cannot be used to add to the target sum.

// O(2n) or linear time complexity
const subsetSum = (sum, arr) => {
  const sorted = arr.sort((a, b) => b - a)
  let currTarget = sum

  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] <= currTarget) {
      currTarget -= sorted[i]
      if (currTarget === 0) return true
    }
  }

  return false
}

console.log('Expected: false // Got: ', subsetSum(2, [1, 10, 5, 3]))
console.log('Expected: true // Got: ', subsetSum(10, [1, 10, 5, 3]))
console.log('Expected: true // Got: ', subsetSum(9, [1, 10, 5, 3]))
console.log('Expected: false // Got: ', subsetSum(17, [1, 10, 5, 3]))
console.log('Expected: true // Got: ', subsetSum(16, [1, 10, 5, 3]))
