// input: array of names
// output: pairs (max 2). each time function is run, should not duplicate same pairs

// hash table with keys as each name
// values as the person they've paired with before

// function Reacto (names) {
//   const log = {}
//   names.forEach(name => log[name] = [])
//   this.log = log
// }

// Reacto.prototype.generate = function () {
//   let pairs = []
//   const names = Object.keys(this.log).sort((a, b) => !!a * Math.random() - !!b * Math.random())

//   for (let i = 0; i < names.length; i += 2) {
//     pairs.push(names.slice(i, i + 2))
//   }

//   return pairs
// }

class Reacto {

  constructor (names) {
    const log = {}
    names.forEach(name => log[name] = [])
    this.log = log
  }

  generate () {
    const pairs = []
    let names = Object.keys(this.log)
    names = names.sort((a, b) => !!a * Math.random() - !!b * Math.random())

    while (names.length) {
      const p1 = names[0]
      const p2 = names[1]
      if (!this.log[p1].includes(p2) && !this.log[p2].includes(p1)) {
        pairs.push([names.shift(), names.shift()])
        this.log[p1].push(p2)
        this.log[p2].push(p1)
      } else {
        names = names.sort((a, b) => !!a * Math.random() - !!b * Math.random())
      }
    }

    return pairs
  }

  reset () {
    this.log = {}
  }
}

const may28thru31 = ['Eric Kreiter', 'Thomas Luo', 'Masha Obaturova', 'Alena Ioffe', 'Ahsun Kim', 'Wei Ji', 'Rachel Reinauer', 'Stephanie Wu ', 'Maryia Miller', 'Justin Kichler', 'Mercedes Miller', 'Jennifer Scheinhorn', 'Madeline Emde', 'Ricky Lau', 'Dennis Chirchenko', 'Dan Tracy']
const test = ['bob', 'mary', 'ken', 'barbie']

const reacto = new Reacto(may28thru31)

console.log('DAY 1')
console.log(reacto.generate().map(pair => pair.join('\n')).join('\n\n'))
console.log('DAY 3')
console.log(reacto.generate().map(pair => pair.join('\n')).join('\n\n'))

