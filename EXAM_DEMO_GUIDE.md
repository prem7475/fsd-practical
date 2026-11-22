# Complete Exam Demonstration Guide

## Experiment 1

**Aim:** Demonstrate a responsive interactive Tailwind React UI.

**What to open:** `1 Build responsive and interactive UIs using Tailwind CSS/src/App.jsx` and browser.

**Commands:**

```powershell
cd "1 Build responsive and interactive UIs using Tailwind CSS"
npm install
npm run dev
```

**Demonstrate:** Student details, rectangular profile image, navbar sections, responsive width, and show/hide button.

**Expected result:** Profile content appears and extra information toggles.

**Important code:** React component, `useState`, Tailwind `flex`, `grid`, `md:`, `lg:` classes.

**Possible examiner questions:** Explain Tailwind, responsive breakpoints, JSX, state, and conditional rendering.

**What to explain:** Tailwind supplies utility classes; state controls extra information.

**2-minute emergency demo:** Open app, resize browser, and toggle extra information.

## Experiment 2

**Aim:** Demonstrate React hooks and a custom counter hook.

**What to open:** App, `useCounter.js`, theme context file, and browser.

**Commands:** `npm install`, `npm run dev`.

**Demonstrate:** Increase, decrease, reset, name input, browser title, and theme toggle.

**Expected result:** Counter and name update; light/dark theme changes.

**Important code:** `useState`, `useEffect`, `useContext`, custom `useCounter`.

**2-minute emergency demo:** Change counter and theme, explain document title effect.

## Experiment 3

**Aim:** Demonstrate global state with Context API and `useReducer`.

**What to open:** Cart context/provider, cart page, browser.

**Commands:** `npm install`, `npm run dev`.

**Demonstrate:** Add, remove, increase, decrease, item count, and total.

**Expected result:** Cart and totals update.

**Important code:** `CartContext`, `useContext`, reducer actions, array updates.

**2-minute emergency demo:** Add two products and explain global state.

## Experiment 4

**Aim:** Demonstrate MongoDB/Mongoose student CRUD REST APIs.

**What to open:** Backend schema/routes and frontend form/table.

**Commands:**

```powershell
cd "4 REST API Design with MongoDB + Mongoose Integration/backend"
npm install
npm start

cd ../frontend
npm install
npm run dev
```

**Demonstrate:** Add, list, edit, delete, MongoDB document, and invalid ID response.

**Expected result:** CRUD changes persist in MongoDB.

**Important code:** Mongoose schema, `mongoose.connect`, GET/POST/PUT/DELETE routes.

**2-minute emergency demo:** Add and delete one student; show backend route.

## Experiment 5

**Aim:** Demonstrate basic secure Express REST API.

**What to open:** `backend/server.js`.

**Commands:** `npm install`, `npm start`.

**Demonstrate:** GET, POST, PUT, DELETE, missing field, wrong ID, and wrong input type.

**Expected result:** Valid requests succeed and invalid requests return appropriate status codes.

**Important code:** Helmet, CORS, rate limiter, validation, try/catch, middleware.

**2-minute emergency demo:** POST valid note then GET it and explain security middleware.

## Experiment 6

**Aim:** Demonstrate JWT authentication and role authorization.

**What to open:** User model, auth routes, JWT middleware, login frontend.

**Commands:** `npm install` in backend/frontend, configure `.env`, start both.

**Demonstrate:** Register, login, user dashboard, admin demo login, unauthorized request, logout.

**Expected result:** Password is hashed; JWT works; admin-only route rejects users.

**Important code:** `bcrypt.hash`, `bcrypt.compare`, `jwt.sign`, `jwt.verify`, role middleware.

**2-minute emergency demo:** Login user, show token, call protected route, explain role check.

## Experiment 7

**Aim:** Demonstrate Postman API testing.

**What to open:** Postman, collection, environment, and API YAML.

**Commands:** `npm install`, `npm start`.

**Demonstrate:** Import files, run Create and save ID, Get, Update, Delete, invalid ID, missing field, wrong type.

**Expected result:** Collection runner passes valid workflow and validates errors.

**Important code:** Postman test scripts and collection variables.

**2-minute emergency demo:** Run the create request, then GET by saved ID.

## Experiment 8

**Aim:** Demonstrate real-time Socket.IO communication.

**What to open:** `frontend/src/App.jsx`, `backend/server.js`, two browser tabs.

**Commands:** `npm install` and `npm start` in backend, then frontend.

**Demonstrate:** Enter usernames, connect status, send from one tab, receive in both.

**Expected result:** Messages appear in real time.

**Important code:** `io()`, `socket.on`, `socket.emit`, and server broadcast.

**2-minute emergency demo:** Send a message from one tab and show it in another.

## Experiment 9

**Aim:** Demonstrate feedback app and CI/CD deployment preparation.

**What to open:** Workflow file, frontend, backend, deployment settings.

**Commands:** `npm install`, `npm start`, `npm run dev`, `npm run build`.

**Demonstrate:** Submit and view feedback, workflow trigger, build success, Vercel/Render values.

**Expected result:** Feedback works locally; workflow passes after push.

**Important code:** CI steps, `VITE_API_URL`, CORS, in-memory array.

**2-minute emergency demo:** Submit feedback locally and show Actions workflow.

## Experiment 10

**Aim:** Demonstrate Docker Compose task deployment.

**What to open:** Dockerfiles, Compose file, browser.

**Commands:**

```powershell
docker compose build
docker compose up -d
docker compose ps
docker compose logs
```

**Demonstrate:** Add task, complete task, delete task, running containers, logs.

**Expected result:** Frontend communicates with backend and containers are running.

**Important code:** Dockerfile stages, Compose services, browser `localhost` API URL.

**2-minute emergency demo:** Run Compose and show task add plus `docker compose ps`.
