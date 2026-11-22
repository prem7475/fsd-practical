# Experiment 10 — Containerize a Full-stack Task App

## 1. Experiment
**Deploy a React and Express application using Docker Compose**

## 2. Aim
Build a small task manager and package its frontend and backend as separate containers.

## 3. Objectives
- Connect a React browser app to an Express JSON API.
- Create container images for the frontend and backend.
- Start both services together with Docker Compose and configure the browser-safe API URL.

## 4. Learning outcomes
You will practice Dockerfiles, image build arguments, container ports, service health checks, Compose networking, and the difference between a browser URL and an internal container hostname.

## 5. Prerequisites
Install Node.js 20 or later for local development and Docker Desktop (or Docker Engine with Compose v2) for containers. The task data is in memory and will not persist across backend restarts.

## 6. Theory
The frontend is built into static files and served by Nginx. The API runs in its own Node.js container. Compose starts and health-checks the API before the frontend. The browser—not the frontend container—makes API requests, so `VITE_API_URL` must be a URL the browser can reach (by default, `http://localhost:5004/api`), not `http://backend:5004/api`.

## 7. Tools and requirements
- React, Vite, Express, and Supertest
- `frontend/Dockerfile`, `backend/Dockerfile`, `frontend/nginx.conf`
- `docker-compose.yml` and `.dockerignore`
- Docker Compose v2 for the container workflow

## 8. Procedure
1. For local development, run `npm install` and `npm run dev`, then open `http://localhost:5175`.
2. With Docker available, run `docker compose config` to inspect the resolved configuration.
3. Build and start with `docker compose up --build`.
4. Open `http://localhost:8080`, add/complete/delete tasks, and inspect API health at `http://localhost:5004/api/health`.
5. Stop containers with `Ctrl+C`; run `docker compose down` to remove them.

## 9. Implementation
The Express task API is in `backend/server.js`. The browser API base is configured at frontend build time through `VITE_API_URL` and defaults to the host URL `http://localhost:5004/api`. Compose maps the API to host port `5004` and the Nginx frontend to host port `8080`. The backend accepts only the configured frontend origin.

## 10. Run commands
```bash
npm install
npm run dev
npm test
npm run build

# Container workflow:
docker compose config
docker compose up --build
```
To use a different host address, set `VITE_API_URL` before building, for example `VITE_API_URL=http://192.168.1.25:5004/api docker compose up --build` (PowerShell: `$env:VITE_API_URL='http://192.168.1.25:5004/api'; docker compose up --build`). The address must be reachable from the browser.

## 11. Test cases and expected output
Backend tests verify task creation, listing, completion, deletion, and validation. `npm run build` creates the Vite static bundle. `docker compose config` checks Compose syntax and variable resolution; `docker compose up --build` must complete successfully before claiming the app runs in containers. In the browser, tasks should update without a page reload.

## 12. Result and viva questions
**Result:** A React task app, tested Express API, two Dockerfiles, and a Compose configuration are provided. API records are temporary and disappear when the container is recreated.

**Review questions:** What is the difference between an image and a container? Why can't a browser call the Compose service name `backend`? What does a health check do? Why is Vite's API URL a build-time setting?
