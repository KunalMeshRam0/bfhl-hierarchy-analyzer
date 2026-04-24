/*
 Builds summary object from hierarchies
 */
function buildSummary(hierarchies, total_cycles) {
    let total_trees = 0;
    let maxDepth = -1;
    let largest_tree_root = "";
  
    for (let h of hierarchies) {
      if (!h.has_cycle) {
        total_trees++;
  
        if (
          h.depth > maxDepth ||
          (h.depth === maxDepth && h.root < largest_tree_root)
        ) {
          maxDepth = h.depth;
          largest_tree_root = h.root;
        }
      }
    }
  
    return {
      total_trees,
      total_cycles,
      largest_tree_root
    };
  }
  
  module.exports = { buildSummary };