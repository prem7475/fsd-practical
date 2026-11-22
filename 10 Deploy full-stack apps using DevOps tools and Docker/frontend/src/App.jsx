import { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5004/api';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadTasks() {
    try {
      const response = await fetch(`${apiUrl}/tasks`);
      if (!response.ok) throw new Error('Unable to load tasks. Check that the API is running.');
      setTasks(await response.json());
      setNotice('');
    } catch (error) {
      setNotice(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadTasks(); }, []);

  async function addTask(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not add task.');
      setTasks((current) => [result, ...current]);
      setTitle('');
      setNotice('');
    } catch (error) {
      setNotice(error.message || 'Could not connect to the API.');
    }
  }

  async function toggleTask(task) {
    try {
      const response = await fetch(`${apiUrl}/tasks/${task.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.completed })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not update task.');
      setTasks((current) => current.map((item) => item.id === result.id ? result : item));
      setNotice('');
    } catch (error) {
      setNotice(error.message || 'Could not connect to the API.');
    }
  }

  async function deleteTask(id) {
    try {
      const response = await fetch(`${apiUrl}/tasks/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Could not delete task.');
      setTasks((current) => current.filter((item) => item.id !== id));
      setNotice('');
    } catch (error) {
      setNotice(error.message || 'Could not connect to the API.');
    }
  }

  const doneCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="app">
      <header className="top">
        <div><p className="eyebrow">EXPERIMENT 10 · DOCKER</p><h1>Small steps,<br />big progress.</h1></div>
        <div className="counter"><strong>{doneCount}/{tasks.length}</strong><span>completed</span></div>
      </header>
      <form className="add-form" onSubmit={addTask}>
        <input aria-label="New task" required maxLength="120" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What needs to get done?" />
        <button type="submit">Add task <span>＋</span></button>
      </form>
      {notice && <p className="notice" role="alert">{notice}</p>}
      <section className="task-list" aria-label="Tasks">
        {loading ? <p className="empty">Loading your list…</p> : tasks.length === 0 ? <div className="empty"><span>✦</span><p>Your list is clear.</p><small>Add a task to get started.</small></div> : tasks.map((task) => (
          <article className={`task ${task.completed ? 'is-done' : ''}`} key={task.id}>
            <label className="check"><input type="checkbox" checked={task.completed} onChange={() => toggleTask(task)} /><span /></label>
            <p>{task.title}</p>
            <button className="delete" type="button" aria-label={`Delete ${task.title}`} onClick={() => deleteTask(task.id)}>×</button>
          </article>
        ))}
      </section>
      <footer>Tasks are stored in memory and reset when the API container restarts.</footer>
    </main>
  );
}
