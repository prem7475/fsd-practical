# Environment Variables Guide

| Variable | Experiments | Purpose | Example | Manual change |
|---|---|---|---|---|
| `MONGO_URI` | 4, 6 | MongoDB connection string | `mongodb://127.0.0.1:27017/fsd_students` | Yes |
| `JWT_SECRET` | 6 | Secret used to sign and verify JWTs | Generate with Node command below | Yes |
| `PORT` | 4, 5, 6, 7, 8, 9, 10 | Backend listening port | `5000` | Usually no |
| `VITE_API_URL` | 9, 10 | Browser-visible backend URL | `http://localhost:5000` | Yes for deployment |
| `CORS_ORIGIN` | 5, 6, 8, 9 | Allowed frontend origin | `http://localhost:5173` | Yes for deployment |

## Creating `.env`

Open a backend folder and copy its example:

```powershell
Copy-Item .env.example .env
notepad .env
```

On macOS or Linux:

```bash
cp .env.example .env
```

`.env.example` contains safe placeholders and can be committed. `.env` contains real local values and must not be committed.

## MongoDB

Local example:

```text
MONGO_URI=mongodb://127.0.0.1:27017/fsd_students
PORT=5000
```

Atlas users copy the connection URI supplied by Atlas and replace `<password>` with their own database password. Do not commit that password.

## JWT Secret

Generate a local secret:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Put the generated value in Experiment 6's `JWT_SECRET` only.

## Frontend API URL

Vite reads `VITE_API_URL` at build time. Restart Vite after changing it. For local Docker/Render use an actual `http://` or `https://` URL visible to the browser. Never use `backend` as a browser hostname.
