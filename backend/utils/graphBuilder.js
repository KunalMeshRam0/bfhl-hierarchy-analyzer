const { isValidEdge } = require("./validator");
const { buildTreeDFS } = require("./treeBuilder");
const { buildSummary } = require("./summary");

/*
 Main function that processes input and returns final structured result
 */
function processGraph(data) {
  const invalid_entries = [];
  const duplicate_edges = [];

  const edgeSet = new Set();       // Track unique edges
  const adjacency = {};            // Graph
  const childSet = new Set();      // Track children

  /*
   STEP 1: Validation + Deduplication
   */
  for (let raw of data) {
    const trimmed = typeof raw === "string" ? raw.trim() : "";

    if (!isValidEdge(trimmed)) {
      invalid_entries.push(item);
      continue;
    }

    // Handle duplicates
    if (edgeSet.has(trimmed)) {
      if (!duplicate_edges.includes(trimmed)) {
        duplicate_edges.push(trimmed);
      }
      continue;
    }

    edgeSet.add(trimmed);

    const [parent, child] = trimmed.split("->");

    // Initialize adjacency list
    if (!adjacency[parent]) adjacency[parent] = [];

    // Handle multi-parent (only first wins)
    if (!childSet.has(child)) {
      adjacency[parent].push(child);
      childSet.add(child);
    }
  }

  /*
   STEP 2: Collect all nodes
   */
  const nodes = new Set([
    ...Object.keys(adjacency),
    ...childSet
  ]);

  /*
   STEP 3: Find roots
   Root = node that never appears as a child
   */
  let roots = [...nodes].filter(node => !childSet.has(node));

  /*
   STEP 4: Handle pure cycle case
   */
  if (roots.length === 0 && nodes.size > 0) {
    roots = [[...nodes].sort()[0]];
  }

  const visitedGlobal = new Set();
  const hierarchies = [];
  let total_cycles = 0;

  /*
   STEP 5: Build trees / detect cycles
   */
  for (let root of roots) {
    if (visitedGlobal.has(root)) continue;

    const visited = new Set();
    const stack = new Set();

    const result = buildTreeDFS(root, adjacency, visited, stack);

    // Mark all visited nodes globally
    visited.forEach(n => visitedGlobal.add(n));

    if (result.hasCycle) {
      total_cycles++;
      hierarchies.push({
        root,
        tree: {},
        has_cycle: true
      });
    } else {
      hierarchies.push({
        root,
        tree: { [root]: result.subtree },
        depth: result.depth
      });
    }
  }

  /*
   STEP 6: Summary
   */
  const summary = buildSummary(hierarchies, total_cycles);

  return {
    hierarchies,
    invalid_entries,
    duplicate_edges,
    summary
  };
}

module.exports = { processGraph };