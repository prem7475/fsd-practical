import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const socketUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5002';

export default function App() {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('Guest');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const bottomRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io(socketUrl);
    socketRef.current = socket;
    socket.on('connect', () => setConnected(true));
    socket.on('disconnect', () => setConnected(false));
    socket.on('chat:history', (history) => setMessages(history));
    socket.on('chat:message', (message) => setMessages((current) => [...current, message]));
    socket.on('chat:error', (result) => setError(result.message));
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  function sendMessage(event) {
    event.preventDefault();
    if (!text.trim()) return;
    setError('');
    socketRef.current?.emit('chat:send', { text, sender: name });
    setText('');
  }

  return (
    <main className="card">
      <header>
        <div>
          <p className="eyebrow">EXPERIMENT 8</p>
          <h1>Live chat</h1>
        </div>
        <span className={`status ${connected ? 'online' : 'offline'}`}>
          <i />{connected ? 'Connected' : 'Disconnected'}
        </span>
      </header>
      <p className="hint">Open this page in two tabs to chat in real time.</p>
      <label className="name-label" htmlFor="name">Your name</label>
      <input id="name" value={name} onChange={(event) => setName(event.target.value)} maxLength="30" />
      <section className="messages" aria-live="polite">
        {messages.length === 0 && <p className="empty">No messages yet. Say hello!</p>}
        {messages.map((message) => (
          <article className="message" key={message.id}>
            <div><strong>{message.sender}</strong><time>{new Date(message.sentAt).toLocaleTimeString()}</time></div>
            <p>{message.text}</p>
          </article>
        ))}
        <div ref={bottomRef} />
      </section>
      {error && <p className="error" role="alert">{error}</p>}
      <form onSubmit={sendMessage}>
        <input aria-label="Message" value={text} onChange={(event) => setText(event.target.value)} maxLength="500" placeholder="Write a message..." />
        <button disabled={!connected || !text.trim()}>Send</button>
      </form>
    </main>
  );
}
