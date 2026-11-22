import { useEffect, useState } from "react";
import { useCounter } from "./hooks/useCounter.js";
import { useTheme } from "./context/ThemeContext.jsx";

export default function App() {
  const [name, setName] = useState("");
  const counter = useCounter();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    document.title = `Hooks Lab | Count: ${counter.count}`;
  }, [counter.count]);

  return (
    <main className={`app ${isDark ? "dark" : "light"}`}>
      <section className="panel">
        <p className="eyebrow">Experiment 2</p>
        <h1>React Hooks Lab</h1>
        <p className="description">
          Try a counter, update the greeting, and switch the shared theme.
        </p>

        <div className="card">
          <h2>Counter</h2>
          <p className="count" aria-live="polite">
            {counter.count}
          </p>
          <div className="button-row">
            <button onClick={counter.decrement} type="button">− Decrease</button>
            <button onClick={counter.increment} type="button">+ Increase</button>
            <button className="secondary" onClick={counter.reset} type="button">Reset</button>
          </div>
        </div>

        <div className="card">
          <h2>State and effect</h2>
          <label htmlFor="student-name">Your name</label>
          <input
            id="student-name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Type your name"
            value={name}
          />
          <p className="greeting" aria-live="polite">
            {name.trim() ? `Hello, ${name.trim()}!` : "Hello, student!"}
          </p>
          <p className="hint">The browser tab title also follows the counter.</p>
        </div>

        <div className="theme-row">
          <span>Current theme: <strong>{theme}</strong></span>
          <button className="secondary" onClick={toggleTheme} type="button">
            Switch to {isDark ? "light" : "dark"} theme
          </button>
        </div>
      </section>
    </main>
  );
}
