import { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5003/api';

export default function App() {
  const [feedback, setFeedback] = useState([]);
  const [form, setForm] = useState({ name: '', rating: '5', message: '' });
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadFeedback() {
    try {
      const response = await fetch(`${apiUrl}/feedback`);
      if (!response.ok) throw new Error('Could not load feedback.');
      setFeedback(await response.json());
    } catch (error) {
      setNotice(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadFeedback(); }, []);

  async function submit(event) {
    event.preventDefault();
    setNotice('');
    try {
      const response = await fetch(`${apiUrl}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, rating: Number(form.rating) })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Submission failed.');
      setFeedback((current) => [result, ...current]);
      setForm({ name: '', rating: '5', message: '' });
      setNotice('Thanks! Your feedback was saved.');
    } catch (error) {
      setNotice(error.message);
    }
  }

  return (
    <main className="layout">
      <section className="intro">
        <p className="eyebrow">EXPERIMENT 9 · FEEDBACK</p>
        <h1>Your thoughts help us improve.</h1>
        <p>Share a quick note. Feedback is kept in memory while the API is running.</p>
        <form className="form" onSubmit={submit}>
          <label>Name <span>(optional)</span><input value={form.name} maxLength="60" onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="How should we address you?" /></label>
          <label>Rating
            <select value={form.rating} onChange={(event) => setForm({ ...form, rating: event.target.value })}>
              {[5, 4, 3, 2, 1].map((value) => <option value={value} key={value}>{value} — {value === 5 ? 'Great' : value === 1 ? 'Needs work' : 'Good'}</option>)}
            </select>
          </label>
          <label>Your feedback<textarea required minLength="1" maxLength="500" rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What went well? What could be better?" /></label>
          <button type="submit">Send feedback</button>
          {notice && <p className="notice" role="status">{notice}</p>}
        </form>
      </section>
      <section className="recent">
        <h2>Recent feedback <span>{feedback.length}</span></h2>
        {loading ? <p>Loading feedback…</p> : feedback.length === 0 ? <p className="muted">No feedback yet. You can be the first.</p> : feedback.map((item) => (
          <article className="entry" key={item.id}>
            <div className="entry-head"><strong>{item.name}</strong><span>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</span></div>
            <p>{item.message}</p>
            <time>{new Date(item.createdAt).toLocaleString()}</time>
          </article>
        ))}
      </section>
    </main>
  );
}
