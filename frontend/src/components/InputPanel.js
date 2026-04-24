import { useState } from "react";

/**
 * Handles user input and sends parsed data to parent
 */
export default function InputPanel({ onSubmit }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    try {
      const parsed = JSON.parse(text);

      if (!Array.isArray(parsed)) {
        setError("Input must be a JSON array");
        return;
      }

      setError("");
      onSubmit(parsed);

    } catch {
      setError("Invalid JSON format");
    }
  };

  return (
    <div className="panel">
      <h2>Enter Node Data</h2>

      <textarea
        placeholder='Example: ["A->B","B->C"]'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>Analyze</button>

      {/* Example buttons */}
      <div className="examples">
        <p>Try examples:</p>

        <button onClick={() => setText('["A->B","B->C"]')}>
          Simple Tree
        </button>

        <button onClick={() => setText('["X->Y","Y->Z","Z->X"]')}>
          Cycle
        </button>

        <button onClick={() => setText('["A->B","A->C","B->D"]')}>
          Multi-level
        </button>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}