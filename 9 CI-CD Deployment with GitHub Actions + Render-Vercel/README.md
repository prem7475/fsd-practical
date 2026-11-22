# Experiment 9 — Feedback App with GitHub Actions

## 1. Experiment
**Build a feedback application and automate checks with GitHub Actions**

## 2. Aim
Create a React feedback form backed by an Express API and run the project's tests and production build in CI.

## 3. Objectives
- Submit and list feedback through a JSON API.
- Validate the feedback on the server and keep it in memory.
- Run backend tests and build the frontend automatically on pushes and pull requests.

## 4. Learning outcomes
You will practice frontend-to-API configuration, server-side validation, npm workspaces, automated tests, and a basic GitHub Actions workflow.

## 5. Prerequisites
Install Node.js 20 or later and npm. A GitHub account is needed to run the workflow after pushing this folder to a repository. No database or deployment account is needed for local use.

## 6. Theory
The browser sends feedback to the Express API, which validates and stores it in process memory. CI (continuous integration) repeats tests and a production build on every push or pull request so basic errors are caught early. A restarted API loses its feedback.

## 7. Tools and requirements
- React, Vite, Express, and Supertest
- `.env.example` for local configuration guidance
- `.github/workflows/ci.yml` for GitHub Actions
- Backend tests and frontend production build

## 8. Procedure
1. Copy `.env.example` to `.env` if you want to customize the local ports or API URL.
2. Run `npm install`, then start both apps with `npm run dev`.
3. Open `http://localhost:5174`, submit feedback, and review the recent feedback list.
4. Run `npm test` and `npm run build`.
5. Push this experiment folder's contents to GitHub; Actions runs the same test and build steps.

## 9. Implementation
The API in `backend/server.js` has `GET /api/feedback` and `POST /api/feedback`; it validates a 1–5 rating and a non-empty message. The React app fetches existing entries and refreshes the list after successful submission. The CI workflow uses Node.js 20 and the lockfile.

## 10. Run commands
```bash
npm install
npm run dev
# In another terminal:
npm test
npm run build
```
The frontend is on `http://localhost:5174` and the API is on `http://localhost:5003`.

## 11. Test cases and expected output
The backend tests cover a valid submission, invalid rating/message, and listing entries. The browser displays a success confirmation and the new feedback. GitHub Actions should report green test and build steps; failures appear in the workflow log.

## 12. Result and viva questions
**Result:** A working feedback form, in-memory Express API, backend test suite, and real GitHub Actions CI workflow are provided. Render/Vercel deployment is intentionally not required to run this experiment.

**Review questions:** What is the difference between CI and deployment? Why validate data on the server? What does `npm ci` do? Why can local memory storage be unsuitable for production?
