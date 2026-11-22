# Experiment 4: Student CRUD with React, Express, and MongoDB

## Aim
Build a beginner-friendly web application that creates, reads, updates, and deletes student records through a REST API.

## Theory
A REST API exposes resources through HTTP methods. This experiment uses `GET` to read students, `POST` to create one, `PUT` to update one, and `DELETE` to remove one. Express handles HTTP requests, Mongoose maps JavaScript objects to MongoDB documents, and React renders the interface and calls the API.

## Technologies
- Frontend: React, Vite, JavaScript, Fetch API, CSS
- Backend: Node.js, Express, Mongoose, MongoDB, CORS, dotenv

## Folder Structure
```text
4 REST API Design with MongoDB + Mongoose Integration/
├── backend/
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── models/Student.js
│       ├── routes/studentRoutes.js
│       └── server.js
└── frontend/
    ├── index.html
    ├── package.json
    └── src/ (App.jsx, main.jsx, style.css)
```

## Installation
1. Install Node.js LTS and start a local MongoDB server, or create a MongoDB Atlas database.
2. In a terminal, enter `backend` and install the dependencies:
   ```powershell
   cd "4 REST API Design with MongoDB + Mongoose Integration\backend"
   npm install
   Copy-Item .env.example .env
   ```
3. Edit `backend/.env`. Replace the `MONGO_URI` placeholder with your own connection string. For local MongoDB, a typical URI is `mongodb://127.0.0.1:27017/experiment4_students`; for Atlas, copy the connection URI from your own cluster and set the database name. Ensure the local server is running or the Atlas network access is configured. Do not commit `.env`.
4. Open another terminal, enter `frontend`, and install its dependencies:
   ```powershell
   cd "4 REST API Design with MongoDB + Mongoose Integration\frontend"
   npm install
   ```

## Run
Run the backend from its folder: `npm run dev`. Once it reports that it is listening on port 5000, run `npm run dev` in the frontend folder and open the Vite URL (normally `http://localhost:5173`). To change the frontend API address, set `VITE_API_URL` in a frontend `.env` file; the default is `http://localhost:5000/api/students`.

## Demonstrate
1. Add a student with a name, valid email, and course.
2. Confirm the new row appears in the Students list.
3. Edit the course and save; then delete the student.
4. Try reusing an existing email or submitting invalid data to observe validation errors.
5. The corresponding API endpoints are `GET/POST /api/students` and `PUT/DELETE /api/students/:id`.

## Expected Output
The page displays an add/update form and a student list. Successful actions update the list immediately. Invalid data, duplicate email addresses, unavailable API, or invalid IDs display a readable message. Records are stored in MongoDB, so they persist between server restarts.

## Code Explanation
- `Student.js` defines required fields, email format, uniqueness, trimming, and timestamps.
- `studentRoutes.js` implements the four CRUD routes and checks MongoDB IDs.
- `server.js` loads environment configuration, connects to MongoDB, enables JSON and CORS, and converts common errors to HTTP responses.
- `App.jsx` fetches the collection, submits create/update forms, and invokes delete; `style.css` provides a small responsive layout.

## Viva Questions and Answers
1. **What is REST?** A style for designing resource-oriented APIs that use standard HTTP methods.
2. **What does CRUD stand for?** Create, Read, Update, and Delete.
3. **What does Express do?** It provides routing and middleware for Node.js HTTP applications.
4. **What is Mongoose?** An ODM that defines schemas and works with MongoDB documents.
5. **Why use a schema?** To describe document fields and validate data before it is stored.
6. **When is `POST` used?** To create a new resource.
7. **What is the difference between `PUT` and `DELETE` here?** `PUT` updates a student; `DELETE` removes it.
8. **What does CORS control?** Which browser origins may make cross-origin requests to the API.
9. **Why keep `MONGO_URI` in `.env`?** It separates environment-specific connection settings from source code.
10. **What does HTTP 404 indicate?** The requested route or student resource was not found.

## Common Errors
- **MongoDB connection refused:** Start MongoDB or check that the URI, network access, and Atlas credentials are correct.
- **`MONGO_URI is required`:** Copy `.env.example` to `.env` in `backend` and check its spelling.
- **Frontend cannot reach API:** Confirm the backend is running and `CLIENT_ORIGIN`/`VITE_API_URL` are correct.
- **Duplicate email:** Use a different email; MongoDB enforces uniqueness.
- **Validation or invalid ID response:** Check required fields and use an existing student ID.

## Conclusion
This experiment demonstrates a complete React-to-Express workflow with validated MongoDB CRUD operations and a simple responsive interface.
