// the function MultiplicativePersistence(num) 
// take the num parameter being passed which will always be a positive integer and return 
// its multiplicative persistence, which is the number of times you must multiply the digits 
// in num until you reach a single digit. For example: if num is 39 then your program should 
// return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

// Iterative solution
function mp(num) {
  let product = num.toString().split('')
  let count = 0

  while (product.length > 1) {
    let newProduct = product.reduce((acc, n) => acc * n)
    product = newProduct.toString().split('')
    count++
  }

  return count
}

function mpStr(num) {
  let numStr = num.toString()
  let count = 0

  while (numStr.length > 1) {
    let product = 1
    for (let i = 0; i < numStr.length; i++) {
      product *= numStr[i]
    }
    numStr = product.toString()
    count++
  }

  return count
}

// Recursive solution
function mpRecursive(num) {
  if (num.toString().length === 1) {
    return 0;
  }

  let product = 1;
  let splitStr = num.toString().split('');

  for (var i = 0; i < splitStr.length; i++) {
    product *= splitStr[i]
  }

  return 1 + mpRecursive(product);
}

// console.log(persistence(39))
console.log('Result: ', mp(892378899))
console.log('Result: ', mpStr(892378899))


