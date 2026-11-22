const express = require('express');

function createApp() {
  const app = express();
  let nextId = 1;
  const todos = [];

  app.use(express.json());

  app.get('/api/todos', (request, response) => {
    response.json(todos);
  });

  app.get('/api/todos/:id', (request, response) => {
    const todo = todos.find((item) => item.id === Number(request.params.id));
    if (!todo) return response.status(404).json({ error: 'Todo not found' });
    response.json(todo);
  });

  app.post('/api/todos', (request, response) => {
    const body = request.body || {};
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    if (!title) return response.status(400).json({ error: 'A non-empty title is required' });

    const todo = { id: nextId++, title, completed: false };
    todos.push(todo);
    response.status(201).json(todo);
  });

  app.put('/api/todos/:id', (request, response) => {
    const todo = todos.find((item) => item.id === Number(request.params.id));
    if (!todo) return response.status(404).json({ error: 'Todo not found' });

    const body = request.body || {};
    if (typeof body.title !== 'string' || !body.title.trim()) {
      return response.status(400).json({ error: 'A non-empty title is required' });
    }
    if (typeof body.completed !== 'boolean') {
      return response.status(400).json({ error: 'completed must be a boolean' });
    }

    todo.title = body.title.trim();
    todo.completed = body.completed;
    response.json(todo);
  });

  app.delete('/api/todos/:id', (request, response) => {
    const index = todos.findIndex((item) => item.id === Number(request.params.id));
    if (index === -1) return response.status(404).json({ error: 'Todo not found' });
    todos.splice(index, 1);
    response.status(204).end();
  });

  return app;
}

if (require.main === module) {
  const port = process.env.PORT || 5001;
  createApp().listen(port, () => console.log(`Todo API running at http://localhost:${port}`));
}

module.exports = { createApp };
