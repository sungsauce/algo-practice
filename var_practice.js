var name = 'wendy'
console.log("before ", name)


function varFn () {
  var name = 'bob'
  console.log("inside fn ", name)
}

varFn()
console.log("after fn ", name)
