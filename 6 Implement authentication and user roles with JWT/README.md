# Experiment 6: JWT Authentication and Role-Based Dashboards

## Aim
Build a React login/registration interface and an Express/MongoDB API that hashes passwords, issues JWTs, and restricts user and admin dashboard endpoints by role.

## Theory
Authentication verifies a user's identity; authorization decides what that identity may access. bcrypt hashes passwords before storage, so the original password is not kept. After login, the server signs a JWT containing a user ID and role. Middleware verifies that token and checks its role before allowing access. Public registration always assigns the `user` role. An administrator is created separately by a local backend script.

## Technologies
- Frontend: React, Vite, JavaScript, Fetch API, CSS
- Backend: Node.js, Express, Mongoose, MongoDB, bcryptjs, jsonwebtoken, CORS, dotenv

## Folder Structure
```text
6 Implement authentication and user roles with JWT/
├── backend/
│   ├── .env.example
│   ├── package.json
│   ├── scripts/createAdmin.js
│   └── src/
│       ├── middleware/auth.js
│       ├── models/User.js
│       ├── routes/authRoutes.js
│       ├── routes/dashboardRoutes.js
│       └── server.js
└── frontend/
    ├── index.html
    ├── package.json
    └── src/ (App.jsx, main.jsx, style.css)
```

## Installation
1. Install Node.js LTS and run MongoDB locally, or create your own MongoDB Atlas database.
2. In the backend folder, install dependencies and create your local environment file:
   ```powershell
   cd "6 Implement authentication and user roles with JWT\backend"
   npm install
   Copy-Item .env.example .env
   ```
3. Edit `.env`: replace the `MONGO_URI` placeholder with your own URI. For local MongoDB, a typical value is `mongodb://127.0.0.1:27017/experiment6_auth`; for Atlas, copy your cluster's URI and configure its database name and network access. Replace `JWT_SECRET` with a long, random value (at least 32 characters). Set `ADMIN_NAME`, `ADMIN_EMAIL`, and a strong `ADMIN_PASSWORD` of at least 12 characters. The example values are placeholders, not real secrets. Keep `.env` private and never commit it.
4. In a second terminal, install the frontend:
   ```powershell
   cd "6 Implement authentication and user roles with JWT\frontend"
   npm install
   ```
5. To create an admin record once, run `npm run create-admin` from `backend`. The script reads only the local environment, refuses to overwrite an existing account, and stores the password as a bcrypt hash.

## Run
Start MongoDB first. In the backend folder run `npm run dev`; the API listens on port 5002. In the frontend folder run `npm run dev` and open the Vite URL. The frontend defaults to `http://localhost:5002/api`; override it with `VITE_API_URL` in `frontend/.env` if needed.

## Demonstrate
1. Register a regular account in the UI and observe that it opens the user dashboard.
2. Sign out and register another account if desired. The public form has no role selector, and the API explicitly sets role to `user`.
3. Use the `ADMIN_EMAIL` and `ADMIN_PASSWORD` configured in backend `.env` to sign in as the admin created by `npm run create-admin`; it opens the admin dashboard.
4. To demonstrate authorization, call `GET /api/dashboard/admin` without a token (401), with a user token (403), and with an admin token (200). Send `Authorization: Bearer <token>`.
5. Authentication endpoints are `POST /api/auth/register` and `POST /api/auth/login`.

## Expected Output
Valid registration/login returns a JWT and a public user object without a password. Regular users can access `/api/dashboard/user` but not `/api/dashboard/admin`. Admins can access the admin dashboard. Invalid credentials/token return 401; insufficient role returns 403. User records and hashed passwords are stored in MongoDB.

## Code Explanation
- `User.js` defines allowed roles and hashes passwords with bcrypt in a save hook; password selection is disabled by default.
- `authRoutes.js` validates registration/login and always forces new public accounts to the `user` role.
- `auth.js` verifies Bearer tokens; `authorize` checks role membership.
- `dashboardRoutes.js` exposes separate user/admin endpoints.
- `createAdmin.js` is the only supplied admin creation path and requires local environment values.
- `App.jsx` submits credentials, displays the role-based message, and sends the JWT in the `Authorization` header.

## Viva Questions and Answers
1. **What is authentication?** Verifying who a user is.
2. **What is authorization?** Checking what an authenticated user is allowed to do.
3. **What is a JWT?** A signed token that can carry claims and be verified by the server.
4. **Why hash passwords?** A hash avoids storing the user's original password in the database.
5. **What is bcrypt?** A password-hashing function designed to make brute-force guessing more costly.
6. **What does a 401 response mean?** Authentication is missing or invalid.
7. **What does a 403 response mean?** The identity is known but lacks permission for that resource.
8. **Why is the role set in the backend during registration?** Client-supplied roles cannot be trusted; public registration must not grant admin access.
9. **Why keep the JWT secret outside source code?** A leaked signing secret could allow attackers to forge tokens.
10. **What is a Bearer token?** A credential sent in the HTTP `Authorization` header as `Bearer <token>`.

## Common Errors
- **MongoDB connection failure:** Start MongoDB and verify `MONGO_URI`, Atlas network access, and credentials.
- **JWT secret missing/too short:** Set a private value of at least 32 characters in backend `.env`, then restart.
- **Email already exists:** Choose a different email; duplicate registration is rejected.
- **Admin script says account already exists:** No account is modified. Sign in with that account or use a different admin email.
- **Admin script rejects password:** Set `ADMIN_PASSWORD` to at least 12 characters.
- **401 after login:** Send the returned token as `Authorization: Bearer <token>` and check token expiration.
- **403 on admin dashboard:** Sign in with an admin created by the script; public registration only creates users.
- **CORS/network failure:** Verify both servers are running and their configured ports/origins match.

## Conclusion
This experiment demonstrates password hashing, token authentication, and server-enforced role authorization with separate React dashboards. Admin provisioning is separated from public registration so a client cannot self-assign the privileged role.
