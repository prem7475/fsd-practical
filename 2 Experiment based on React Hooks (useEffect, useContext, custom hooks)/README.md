# Experiment 2: React Hooks Lab

## Aim
Build a small Vite React application that demonstrates `useState`, `useEffect`, `useContext`, and a custom `useCounter` hook.

## Theory
Hooks let function components use React features. `useState` stores local component state; `useEffect` performs a side effect after rendering and can re-run when its dependencies change. Context makes shared values available to nested components without passing props at each level. A custom hook packages reusable stateful logic. This app uses these ideas for a greeting, a counter, a browser-tab title, and a shared light/dark theme.

## Technologies
- JavaScript and JSX
- React 18 and React DOM
- Vite
- CSS

## Folder Structure
```text
2 Experiment based on React Hooks (useEffect, useContext, custom hooks)/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   └── hooks/
│       └── useCounter.js
└── README.md
```

## Installation
Install Node.js and npm, open a terminal in this folder, then install dependencies:
```bash
npm install
```

## Run
Run `npm run dev` and open the local URL printed by Vite (normally `http://localhost:5173`). Run `npm run build` to create the production bundle.

## Demonstrate
1. Click Increase, Decrease, and Reset and observe the counter.
2. Type a name and see the greeting update immediately.
3. Observe that the browser tab title includes the current count.
4. Switch themes and note that the theme provider shares its value with the app.
5. Point out that counter logic is kept in `hooks/useCounter.js`.

## Expected Output
A compact hooks demo with a working counter, name input and greeting, changing browser-tab title, and light/dark theme toggle.

## Important Code
`useCounter` keeps the counter state and exposes its actions:
```js
const [count, setCount] = useState(initialValue);
function increment() {
  setCount((currentCount) => currentCount + 1);
}
```
`App.jsx` uses an effect with `[counter.count]` as its dependency so the document title updates when the count changes. `ThemeProvider` stores the theme and `useTheme()` reads it from context.

## Viva Questions and Answers
1. **What is a hook?** A React function that provides features such as state and effects to function components.
2. **What does `useState` return?** The current state value and a setter function.
3. **What is `useEffect` used for?** Synchronizing a component with external systems or performing side effects.
4. **What does an effect dependency array do?** It controls which changes cause the effect to run again.
5. **Why does the title effect depend on `counter.count`?** The title needs to change whenever the count changes.
6. **What is React Context?** A way to share values with descendant components without passing props through every level.
7. **Why is `ThemeProvider` needed?** It supplies the shared theme value and toggle action through the context.
8. **What is a custom hook?** A reusable JavaScript function whose name starts with `use` and which may call other hooks.
9. **Can hooks be called inside a loop or condition?** No. Call hooks at the top level of React function components or custom hooks.
10. **What is `React.StrictMode`?** A development helper that highlights potential problems; it does not add UI to the page.

## Common Errors
- **Invalid hook call:** Call hooks only at the top level of a component or custom hook; do not call them in event handlers or conditions.
- **`useTheme` context error:** Keep the app under `<ThemeProvider>` as shown in `src/main.jsx`.
- **Effect runs unexpectedly:** Review its dependency list and include every value the effect reads.
- **Changes do not appear:** Confirm the dev server is running from this experiment's folder and save the file.
- **Missing dependencies:** Run `npm install` in this folder.

## Conclusion
The app demonstrates local, shared, and reusable state with core React hooks, and connects `useEffect` to a clear browser-visible result.
