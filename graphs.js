function doesPathExist (graph, orig, dest, seen = {}) { // orig = 'a', dest = 'e'
  let connections = graph[orig] // b

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
  a: ['d', 'c'],
  b: ['c', 'd'],
  c: ['d', 'e'],
  d: [],
  e: []
}

// console.log(doesPathExist(graph, 'a', 'b'))  // true
console.log(doesPathExist(graph, 'a', 'e'))  // true
// console.log(doesPathExist(graph, 'b', 'a'))  // false
// console.log(doesPathExist(graph, 'a', 'a'))  // false
