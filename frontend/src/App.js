import { useState, useEffect } from "react";
import InputPanel from "./components/InputPanel";
import TreeView from "./components/TreeView";
import SummaryPanel from "./components/SummaryPanel";
import { sendData } from "./services/api";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  // Apply dark mode to body
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  // Optional: persist dark mode
  useEffect(() => {
    const saved = localStorage.getItem("dark");
    if (saved === "true") {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);

  const handleSubmit = async (data) => {
    setLoading(true);
    setResult(null);

    try {
      const res = await sendData(data);
      setResult(res);
    } catch (err) {
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Hierarchy Analyzer</h1>
        <p>Analyze relationships and visualize trees</p>

        <button className="toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </header>

      <InputPanel onSubmit={handleSubmit} />

      {loading && <p className="loading">Processing...</p>}

      {result && (
        <>
          <section className="results">
            {result.hierarchies.map((h, i) => (
              <div className="result-card" key={i}>
                <div className="result-header">
                  <h2>Root: {h.root}</h2>
                  {h.has_cycle && <span className="badge">Cycle</span>}
                </div>

                {h.has_cycle ? (
                  <p className="error">
                    Cycle detected (starting from {h.root})
                  </p>
                ) : (
                  <>
                    <TreeView tree={h.tree} />
                    <p>Depth: {h.depth}</p>
                  </>
                )}
              </div>
            ))}
          </section>

          <SummaryPanel summary={result.summary} />
        </>
      )}
    </div>
  );
}

export default App;