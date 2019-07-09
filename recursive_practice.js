function printInReverse(string) {
  if (string.length === 1) {
    return string
  } else {
    console.log(string[string.length - 1] + printInReverse(string.slice(0, string.length - 1)))
  }
}

// printInReverse("bat")

function multiplyStr(string, num) {
  // Iterative
  // let result = ''
  // for (let i = 0; i < num; i++) {
  //   result += string
  // }
  // return result

  // Recursive
  if (num === 0) return ''
  return string + multiplyStr(string, num - 1)
}

// console.log(multiplyStr('ba', 3))
