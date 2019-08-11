function spellingBeeSolutions (wordList, puzzles) {
  const wordListUniques = {}
  const result = []
  wordList.forEach(word => {
    const uniques = [...new Set([...word])].sort().join('')
    if (wordListUniques[uniques]) wordListUniques[uniques]++
    else wordListUniques[uniques] = 1
  })

  puzzles.forEach(puzzle => {
    const key = puzzle[0]
    let count = 0
    for (let word in wordListUniques) {
      if ([...word].every(ltr => puzzle.includes(ltr)) && word.includes(key)) {
        count += wordListUniques[word]
      }
    }
    result.push(count)
  })
  return result
}

console.log(spellingBeeSolutions(['APPLE', 'PLEASE', 'SLEAP', 'PLEAS'], ['SAELPXY', 'AELWXYZ', 'AELPXYZ']))
