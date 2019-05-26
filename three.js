// Given an array of integers where every integer occurs three times except for one integer,
// which only occurs once, find and return the non-duplicated integer.

// For example, given [6, 1, 3, 3, 3, 6, 6], return 1.
// Given [13, 19, 13, 13], return 19.

// Do this in O(N) time and O(1) space.

function three(array) {
  // Hash table method:

  const dict = {}
  array.forEach(el => {
    if (!dict[el]) {
      dict[el] = 3
    } else {
      dict[el]--
      if (dict[el] === 1) delete dict[el]
    }
  })
  return Number(Object.keys(dict)[0])

  // Bitwise method:
  // let a = 0

  // for (let el of array) {
  //   a ^= el
  // }

  // return a
}
