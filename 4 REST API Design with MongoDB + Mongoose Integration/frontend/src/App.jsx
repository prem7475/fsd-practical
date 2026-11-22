import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/students";
const emptyForm = { name: "", email: "", course: "" };

async function request(path = "", options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
}

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState("");
  const [message, setMessage] = useState("");

  async function loadStudents() {
    try {
      setStudents(await request());
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    }
  }

  useEffect(() => { loadStudents(); }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const student = await request(editingId ? `/${editingId}` : "", {
        method: editingId ? "PUT" : "POST",
        body: JSON.stringify(form)
      });
      setStudents((current) => editingId
        ? current.map((item) => item._id === student._id ? student : item)
        : [student, ...current]);
      setForm(emptyForm);
      setEditingId("");
      setMessage(editingId ? "Student updated." : "Student added.");
    } catch (error) {
      setMessage(error.message);
    }
  }

  function editStudent(student) {
    setForm({ name: student.name, email: student.email, course: student.course });
    setEditingId(student._id);
  }

  async function deleteStudent(id) {
    try {
      await request(`/${id}`, { method: "DELETE" });
      setStudents((current) => current.filter((student) => student._id !== id));
      setMessage("Student deleted.");
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <main className="container">
      <h1>Student Manager</h1>
      <p className="intro">Add, view, update, and remove students using a REST API.</p>
      <section className="panel">
        <h2>{editingId ? "Update student" : "Add a student"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name<input required minLength="2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
          <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
          <label>Course<input required value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} /></label>
          <div className="actions">
            <button type="submit">{editingId ? "Save changes" : "Add student"}</button>
            {editingId && <button className="secondary" type="button" onClick={() => { setEditingId(""); setForm(emptyForm); }}>Cancel</button>}
          </div>
        </form>
        {message && <p role="status" className="message">{message}</p>}
      </section>
      <section className="panel">
        <h2>Students ({students.length})</h2>
        {students.length === 0 ? <p>No students yet. Add one above.</p> : (
          <ul className="student-list">
            {students.map((student) => (
              <li key={student._id}>
                <div><strong>{student.name}</strong><span>{student.email} · {student.course}</span></div>
                <div className="actions">
                  <button className="secondary" onClick={() => editStudent(student)}>Edit</button>
                  <button className="danger" onClick={() => deleteStudent(student._id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
