// O(2n) or linear time complexity
const subsetSum = (sum, arr) => {
  const sorted = arr.sort((a, b) => b - a)
  let currTarget = sum

  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] <= sum) {
      currTarget -= sorted[i]
      if (currTarget === 0) return true
    }
  }

  return false
}

console.log('Expected: false // Got: ', subsetSum(2, [1, 10, 5, 3]))
console.log('Expected: true // Got: ', subsetSum(10, [1, 10, 5, 3]))
console.log('Expected: true // Got: ', subsetSum(9, [1, 10, 5, 3]))
console.log('Expected: true // Got: ', subsetSum(19, [1, 10, 5, 3]))
console.log('Expected: false // Got: ', subsetSum(17, [1, 10, 5, 3]))
