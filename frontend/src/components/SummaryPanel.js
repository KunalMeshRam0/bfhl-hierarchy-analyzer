export default function SummaryPanel({ summary }) {
    if (!summary) return null;
  
    return (
      <div className="panel">
        <h3>Summary</h3>
        <p>Total Trees: {summary.total_trees}</p>
        <p>Total Cycles: {summary.total_cycles}</p>
        <p>Largest Tree Root: {summary.largest_tree_root}</p>
      </div>
    );
  }