# Experiment 8 — Real-time Chat with Socket.IO

## 1. Experiment
**Enable real-time communication using WebSockets**

## 2. Aim
Create a minimal chat application where two browser tabs exchange messages instantly through Socket.IO.

## 3. Objectives
- Connect a React client to an Express server with Socket.IO.
- Display the connection status and broadcast chat messages.
- Run the same app in two tabs and observe real-time updates.

## 4. Learning outcomes
You will understand a persistent socket connection, client/server events, message broadcasting, and how React responds to connection state.

## 5. Prerequisites
Install Node.js 20 or later and npm. A modern browser is needed. Internet access is not needed after dependencies have been installed.

## 6. Theory
Unlike a repeated HTTP request, a WebSocket connection stays open so either side can send an event at any time. Socket.IO provides convenient event-based communication and reconnect support. The server broadcasts each accepted message to every connected client. Message history here is kept only in memory.

## 7. Tools and requirements
- React and Vite frontend
- Express and Socket.IO backend
- `socket.io-client` for the browser
- Two tabs pointed at the same local frontend

## 8. Procedure
1. Run `npm install` in this folder.
2. Run `npm run dev` to start the API/socket server and Vite.
3. Open `http://localhost:5173` in two browser tabs.
4. Confirm each says **Connected**, send a message in one tab, and see it appear in both.
5. Stop the processes with `Ctrl+C`.

## 9. Implementation
The socket event handlers are in `backend/server.js`. A `chat:send` event is validated and broadcast as `chat:message`; new clients receive the in-memory message history. The React UI in `frontend/src/App.jsx` listens for messages and shows its current socket state.

## 10. Run commands
```bash
npm install
npm run dev
# Optional: run the socket integration test in another terminal
npm test
```
The frontend and backend can also be started separately with `npm run dev --workspace frontend` and `npm run dev --workspace backend`.

## 11. Test cases and expected output
The backend test opens a real Socket.IO client, sends a message, and verifies the broadcast. Manually check that both tabs show the same chat and that the status changes to **Disconnected** when the server is stopped. The message log disappears when the server restarts.

## 12. Result and viva questions
**Result:** A working two-tab real-time chat app with a visible connection indicator is provided.

**Review questions:** How does WebSocket communication differ from polling? What is the purpose of `chat:send` and `chat:message`? Why does the sample lose its history after restart? How could rooms support separate conversations?
