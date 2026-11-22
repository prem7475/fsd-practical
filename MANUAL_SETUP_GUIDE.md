# Manual Setup Guide

## Work Completed by the AI

The 10 experiment folders, React frontends, Express backends, configuration files, experiment READMEs, Postman collection/environment, OpenAPI YAML, CI workflow, Docker files, and this supporting documentation are provided. No external account, database, deployment, or Docker installation has been created or assumed.

## Required Software

Install Node.js (LTS), npm, and optionally MongoDB Community Server or MongoDB Atlas access, Postman, Git, GitHub CLI or Git, Docker Desktop, and a modern browser. Internet access is required for package installation and cloud deployment.

## Experiment 1

- Work completed: Tailwind student profile React app.
- Manual work: Open the folder, run `npm install`, then `npm run dev`.
- Open the URL shown by Vite.

## Experiment 2

- Work completed: Counter/theme app with `useState`, `useEffect`, `useContext`, and `useCounter`.
- Manual work: Run `npm install`, then `npm run dev`.

## Experiment 3

- Work completed: Context API and `useReducer` shopping cart.
- Manual work: Run `npm install`, then `npm run dev`.

## Experiment 4

- Work completed: React/Mongoose Express student CRUD project and `.env.example`.
- Manual work:
  1. Install MongoDB locally or create a free MongoDB Atlas account/database.
  2. Open the `backend` folder.
  3. Copy `.env.example` to `.env`.
  4. Set `MONGO_URI` to a local URI or Atlas URI.
  5. Set `PORT=5000`.
  6. Run `npm install`.
  7. Run `npm start`.
  8. Confirm the MongoDB connection message.
  9. Open a second terminal in `frontend`, run `npm install`, then `npm run dev`.
  10. Test add, view, update, and delete operations.
- Atlas free tiers can change or require verification. Atlas may require a network IP entry and database user.

## Experiment 5

- Work completed: in-memory notes API with Helmet, CORS, rate limiting, validation, status codes, and error handling.
- Manual work: Open `backend`, copy `.env.example` to `.env` if provided, run `npm install`, then `npm start`.
- Test `http://localhost:5000/api/notes`.

## Experiment 6

- Work completed: React login UI and Express/Mongoose JWT role project, password hashing, protected routes, demo admin script.
- Manual work:
  1. Configure MongoDB exactly as in Experiment 4.
  2. Copy `backend/.env.example` to `backend/.env`.
  3. Set `JWT_SECRET` to a random 32-byte hex value.
  4. Run `npm install` in backend and frontend.
  5. Start MongoDB and backend.
  6. Run the demo admin creation command documented in the experiment README.
  7. Register or log in as a user.
  8. Test protected user and admin routes.
- Public registration must not accept an admin role.

## Experiment 7

- Work completed: Todo API, collection JSON, environment JSON, test scripts, and API YAML.
- Manual work:
  1. Start the API with `npm install` and `npm start`.
  2. Import `postman_collection.json`.
  3. Import `postman_environment.json`.
  4. Select the environment and run individual requests.
  5. Use Collection Runner for sequential tests.
- Postman may require a free account for cloud sync, but local import generally does not require deployment.

## Experiment 8

- Work completed: React frontend and Express/Socket.IO backend.
- Manual work: Install dependencies in both folders, start backend first and frontend second, open two browser tabs, enter two usernames, and send messages.
- Browser tabs must use the Vite URL and not the backend URL as the page.

## Experiment 9

- Work completed: feedback app, CI workflow, build and backend test scripts.
- Manual work:
  1. Create a GitHub account and repository.
  2. Push the complete project.
  3. Open Actions and confirm the workflow passes.
  4. Create a free or paid Render account and deploy `backend`.
  5. Set `PORT=5000` or follow the Render-provided configuration.
  6. Enable CORS for the Vercel frontend URL.
  7. Create a Vercel account and deploy `frontend`.
  8. Set `VITE_API_URL` to the Render HTTPS URL.
  9. Redeploy the frontend and test feedback submission.
- Render and Vercel can require account verification. Free tiers and sleep policies change; use only current provider configuration.

## Experiment 10

- Work completed: task React app, Express API, Dockerfiles, Compose file, and ignore files.
- Manual work:
  1. Install Docker Desktop and start it.
  2. Run `docker compose build`.
  3. Run `docker compose up -d`.
  4. Run `docker compose ps`.
  5. Open `http://localhost:5173` unless the Compose file explicitly documents another URL.
  6. Add, complete, and delete tasks.
  7. Stop with `docker compose down`.
- Docker Desktop requires a supported Windows setup and can need restart or administrator approval.

## Cost and Account Summary

- Node/npm: free.
- MongoDB local: free; Atlas can have free-tier options but is account-based and not guaranteed.
- Postman: local collection import is free; cloud features may vary.
- GitHub: account and internet required.
- Render: account required; service tiers and limits can change.
- Vercel: account required; free-tier availability can change.
- Docker: Docker Desktop may require accepted licensing and a supported installation.
