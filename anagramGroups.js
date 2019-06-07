function anagramGroups (anagrams) {
  let graph = {}
  anagrams.forEach(a => graph[a] = new Set())
  // let groups = []

  for (let i = 0; i < anagrams.length - 1; i++) {
    for (let j = i + 1; j < anagrams.length; j++) {
      let word1 = anagrams[i]
      let word2 = anagrams[j]
      if (isSimilar(word1, word2)) {
        graph[word1].add(word2)
        graph[word2].add(word1)
        // groups.push(new Set([word1, word2])) // add a new group
      }
    }
  }
  return countGroups(graph)
}

function countGroups (graph) {
  // console.log(graph)
  let groupCount = 0
  let visited = new Set()
  let group

  // eslint-disable-next-line guard-for-in
  for (let word in graph) {
    visited.add(word)
    let partners = graph[word]

    if (partners.size === 0) {
      groupCount++
    } else if (!group) {
      group = new Set([word, ...partners])

    } else if (group.has(word)) {
      partners.forEach(partner => {
        group.add(partner)
      })
    }
  }

  // console.log(group)


  return groupCount
}

function isSimilar (a, b) {
  let swappedLtrs = new Set()
  let numSwaps = 0

  for (let i = 0; i < a.length; i++) {
    const noMatch = a[i] !== b[i]
    if (noMatch && swappedLtrs.size === 0) {
      swappedLtrs.add(a[i]).add(b[i])
    } else if (noMatch) {
      if (swappedLtrs.has(a[i]) && swappedLtrs.has(b[i])) {
        numSwaps++
      } else {
        return false
      }
    }
  }

  return numSwaps === 1
}

const input1 = ['tars', 'rats']
const input2 = ['rats', 'arts']
const input3 = ['arts', 'star']
const input4 = ['tars', 'atsr']

// console.log('Expect true, Got: ', isSimilar(...input1))
// console.log('Expect true, Got: ', isSimilar(...input2))
// console.log('Expect false, Got: ', isSimilar(...input3))
// console.log('Expect false, Got: ', isSimilar(...input4))
