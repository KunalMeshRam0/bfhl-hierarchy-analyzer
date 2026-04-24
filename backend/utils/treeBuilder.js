/*
 DFS traversal to build tree correctly (no duplicate nesting)
 */
function buildTreeDFS(node, adj, visited, stack) {
  // Detect cycle
  if (stack.has(node)) {
    return { hasCycle: true };
  }

  visited.add(node);
  stack.add(node);

  const children = adj[node] || [];
  let subtree = {};
  let maxDepth = 1;

  for (let child of children) {
    const result = buildTreeDFS(child, adj, visited, stack);

    if (result.hasCycle) {
      return { hasCycle: true };
    }

    subtree[child] = result.subtree;

    maxDepth = Math.max(maxDepth, 1 + result.depth);
  }

  stack.delete(node);

  return {
    hasCycle: false,
    subtree,   // <-- return only subtree (not {node: subtree})
    depth: maxDepth
  };
}

module.exports = { buildTreeDFS };