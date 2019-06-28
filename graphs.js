function doesPathExist (graph, orig, dest, seen = {}) {
  let connections = graph[orig]

  if (!connections.length) return false
  seen[orig] = true

  return connections.some((node) => {
    if (node === dest) return true
    if (!seen[node]) {
      return doesPathExist(graph, node, dest, seen)
    } else {
      return false
    }
  })
}

const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d'],
  d: []
}

// console.log(doesPathExist(graph, 'a', 'b'))  // true
// console.log(doesPathExist(graph, 'a', 'd'))  // true
// console.log(doesPathExist(graph, 'b', 'a'))  // false
// console.log(doesPathExist(graph, 'a', 'a'))  // false
