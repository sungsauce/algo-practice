function pairSum(arr, target) {
  const dict = {}
  arr.forEach(el => {
    dict[el] = target - el
  })

  for (let key in dict) {
    if (arr.includes(dict[key])) return true // Array.prototype.includes is an O(n) operation
  }

  return false
}

// console.log(pairSum([2, 3], 5)) // expects true, returns true
// console.log(pairSum([2, 3], 4)) // expects false, returns true

