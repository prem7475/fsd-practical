# Important Commands

## React/Vite

```powershell
npm install
npm run dev
npm run build
npm run preview
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## Express

```powershell
npm install
npm start
node server.js
```

Node can report `Missing module` if dependencies were not installed inside the correct backend folder.

## MongoDB

```powershell
Copy-Item .env.example .env
notepad .env
npm start
```

A successful student or user server should print a MongoDB connection message before accepting requests.

## Postman

1. Import `postman_collection.json`.
2. Import `postman_environment.json`.
3. Select the imported environment.
4. Run individual requests or use Collection Runner.

## Git

```powershell
git init
git add .
git commit -m "FSD practical"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Never add `.env` to Git.

## Docker

```powershell
docker --version
docker compose version
docker compose build
docker compose up -d
docker compose ps
docker compose logs
docker compose logs frontend
docker compose logs backend
docker compose down
docker compose up --build
```

## Useful PowerShell

```powershell
Get-ChildItem
Get-ChildItem -Recurse
Test-NetConnection localhost -Port 5000
Invoke-RestMethod http://localhost:5000/
```
