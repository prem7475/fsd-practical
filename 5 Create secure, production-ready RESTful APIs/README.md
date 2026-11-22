# Experiment 5: Secure Notes REST API

## Aim
Create an Express API for notes that demonstrates security middleware, rate limiting, environment configuration, input validation, and centralized error handling. Notes are held in memory.

## Theory
Middleware runs during the request/response cycle. Helmet sets protective HTTP headers, CORS restricts browser access to a configured origin, and express-rate-limit limits repeated requests. Validation rejects malformed or oversized input before it is accepted. An in-memory array is useful for demonstrations but is cleared whenever the process restarts.

## Technologies
- Node.js, Express, JavaScript
- Helmet, CORS, express-rate-limit, dotenv

## Folder Structure
```text
5 Create secure, production-ready RESTful APIs/
└── backend/
    ├── .env.example
    ├── package.json
    └── src/server.js
```

## Installation
Install Node.js LTS, open a terminal in the `backend` folder, and run:
```powershell
cd "5 Create secure, production-ready RESTful APIs\backend"
npm install
Copy-Item .env.example .env
```
The example values are suitable for local demonstration. Set `CLIENT_ORIGIN` to your frontend origin if one is added. Do not commit `.env`.

## Run
From `backend`, run `npm run dev` (or `npm start`). The API listens at `http://localhost:5001` by default. Change the port and rate-limit settings in `.env`.

## Demonstrate
Use Postman, Insomnia, or curl:
```sh
curl http://localhost:5001/api/notes
curl -X POST http://localhost:5001/api/notes -H "Content-Type: application/json" -d "{\"title\":\"Revision\",\"content\":\"Review REST methods\"}"
```
Use the returned `id` for `PUT /api/notes/:id` with a JSON title/content body and `DELETE /api/notes/:id`. Empty/oversized fields return 400, an unknown ID returns 404, and exceeding the configured request limit returns 429.

## Expected Output
The root endpoint returns an API status message. `GET /api/notes` initially returns `[]`. A valid create request returns HTTP 201 and a note with a generated ID and timestamp. Updates and deletes return confirmation data. Helmet adds security headers; invalid requests receive JSON errors.

## Code Explanation
- `server.js` loads environment values and installs Helmet, CORS, JSON size limit, and rate-limit middleware.
- `validateNote` checks trimmed title/content for required values and maximum lengths.
- The routes use an in-memory array for list, create, update, and delete operations.
- The final middleware handles unknown routes, malformed JSON, and unexpected errors.

## Viva Questions and Answers
1. **What is Express middleware?** A function that can inspect or change a request/response and pass control onward.
2. **What is Helmet used for?** Setting HTTP headers that help protect common web security risks.
3. **What is CORS?** A browser security mechanism that controls cross-origin requests.
4. **Why use rate limiting?** To limit request frequency and reduce abuse or accidental overload.
5. **What is dotenv?** A library that loads configuration from a local `.env` file into process environment variables.
6. **Why validate API input?** To reject invalid data early and keep application behavior predictable.
7. **What does HTTP 429 mean?** Too many requests were made within the allowed time window.
8. **What is centralized error handling?** A final Express middleware that formats errors consistently.
9. **Are in-memory notes permanent?** No, they disappear when the server stops or restarts.
10. **Why limit JSON body size?** To avoid accepting unnecessarily large payloads.

## Common Errors
- **Port already in use:** Set a different `PORT` in `.env` or stop the other local server.
- **Malformed JSON:** Ensure the request body is valid JSON and includes the `Content-Type: application/json` header.
- **CORS error in a browser:** Set `CLIENT_ORIGIN` to the exact frontend origin (including port), then restart the API.
- **HTTP 429:** Wait until the configured window resets or adjust the local demonstration limit.
- **Missing scripts/dependencies:** Run `npm install` in this experiment's `backend` folder.
- **Notes disappeared:** This is expected because the data store is intentionally in-memory.

## Conclusion
The API demonstrates practical Express security and input-handling middleware. Its transient storage keeps the exercise simple; a database would be needed for persistent production data.
