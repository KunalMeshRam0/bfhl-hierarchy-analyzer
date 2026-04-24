function renderNode(node, children) {
    return (
      <li key={node}>
        <span>{node}</span>
  
        {Object.keys(children).length > 0 && (
          <ul>
            {Object.entries(children).map(([child, sub]) =>
              renderNode(child, sub)
            )}
          </ul>
        )}
      </li>
    );
  }
  
  export default function TreeView({ tree }) {
    if (!tree) return null;
  
    const root = Object.keys(tree)[0];
  
    return (
        <div className="panel">
          <h3 style={{ marginBottom: "10px" }}>Tree</h3>
          <ul className="tree">
            {renderNode(root, tree[root])}
          </ul>
        </div>
    );
  }