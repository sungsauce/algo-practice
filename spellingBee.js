function spellingBeeSolutions (wordList, puzzles) {
  const wordListUniques = {}
  const result = []
  wordList.forEach(word => {
    const uniques = [...new Set([...word])].join('')
    if (wordListUniques[uniques]) wordListUniques[uniques]++
    else wordListUniques[uniques] = 1
  })

  console.log(wordListUniques)

  puzzles.forEach(puzzle => {
    const key = puzzle[0]
    const puzzleDict = new Set([...puzzle])
    let count = 0
    for (let word in wordListUniques) {
      if ([...word].every(ltr => puzzleDict.has(ltr)) && word.includes(key)) {
        count += wordListUniques[word]
      }
    }
    result.push(count)
  })
  return result
}

console.log(spellingBeeSolutions(['APPLE', 'PLEASE', 'PLEAS'], ['SAELPXY', 'AELWXYZ', 'AELPXYZ']))
