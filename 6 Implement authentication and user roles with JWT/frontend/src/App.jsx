import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5002/api";
const emptyFields = { name: "", email: "", password: "" };

async function api(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
}

export default function App() {
  const [mode, setMode] = useState("login");
  const [fields, setFields] = useState(emptyFields);
  const [session, setSession] = useState(null);
  const [dashboard, setDashboard] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    try {
      const path = mode === "register" ? "/auth/register" : "/auth/login";
      const result = await api(path, { method: "POST", body: JSON.stringify(fields) });
      setSession(result);
      setFields(emptyFields);
      await loadDashboard(result);
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function loadDashboard(currentSession) {
    const endpoint = currentSession.user.role === "admin" ? "/dashboard/admin" : "/dashboard/user";
    try {
      const result = await api(endpoint, {
        headers: { Authorization: `Bearer ${currentSession.token}` }
      });
      setDashboard(result.message);
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    }
  }

  function signOut() {
    setSession(null);
    setDashboard("");
    setMessage("");
  }

  if (session) {
    return (
      <main className="card">
        <p className="eyebrow">{session.user.role} dashboard</p>
        <h1>Hello, {session.user.name}</h1>
        <p>{dashboard || `Signed in as ${session.user.email}`}</p>
        {message && <p className="error" role="alert">{message}</p>}
        <button onClick={signOut}>Sign out</button>
      </main>
    );
  }

  return (
    <main className="card">
      <p className="eyebrow">Experiment 6 · Authentication</p>
      <h1>{mode === "register" ? "Create an account" : "Welcome back"}</h1>
      <p className="muted">{mode === "register" ? "New accounts receive the user role." : "Sign in to open your role dashboard."}</p>
      <form onSubmit={handleSubmit}>
        {mode === "register" && (
          <label>Name
            <input required minLength="2" maxLength="80" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} />
          </label>
        )}
        <label>Email
          <input required type="email" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} />
        </label>
        <label>Password
          <input required type="password" minLength="8" value={fields.password} onChange={(e) => setFields({ ...fields, password: e.target.value })} />
        </label>
        {message && <p className="error" role="alert">{message}</p>}
        <button type="submit">{mode === "register" ? "Register" : "Sign in"}</button>
      </form>
      <p className="switch">
        {mode === "register" ? "Already registered?" : "Need an account?"}{" "}
        <button className="link" onClick={() => { setMode(mode === "register" ? "login" : "register"); setMessage(""); }}>
          {mode === "register" ? "Sign in" : "Register"}
        </button>
      </p>
      <p className="muted small">Admin accounts are created by the backend script, never by public registration.</p>
    </main>
  );
}
