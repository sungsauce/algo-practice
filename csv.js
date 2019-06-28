// name,address,phone
// brian,1 elm st,111-222-3333
// joe,2 pine st,222-333-4444,"New York, NY"

// [
//   {
//     "name":"brian",
//     "address":"1 elm st",
//     "phone":"111-222-3333"
//   },
//   {
//     "name":"joe",
//     "address":"2 pine st",
//     "phone":"222-333-4444"
//   }
// ]

var fs = require('fs');

fs.readFile('./test.csv', 'utf8', function(err, data) {
  if (err) {
    console.log(err)
  } else {
    let lines = data.split('\n')
    const header = lines[0].split(',')
    const result = []

    for (let i = 1; i < lines.length; i++) {
      let cells = lines[i].split(',')
      const entry = cells.reduce((acc, cell, idx) => {
        acc[header[idx]] = cell
        return acc
      }, {})
      result.push(entry)
    }
    console.log(result)
    return result
  }
})
