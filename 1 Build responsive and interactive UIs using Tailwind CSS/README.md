# Experiment 1: Student Profile with React and Tailwind CSS

## Aim
Create a simple, responsive student profile card using React components and Tailwind CSS utility classes.

## Theory
React lets us describe a user interface as reusable components. JSX combines JavaScript and HTML-like markup. Tailwind CSS provides small utility classes (for example, `p-8`, `text-center`, and `rounded-2xl`) that can be composed directly in JSX. Vite serves the app during development and bundles it for production.

## Technologies
- JavaScript and JSX
- React 18 and React DOM
- Vite
- Tailwind CSS 3, PostCSS, and Autoprefixer

## Folder Structure
```text
1 Build responsive and interactive UIs using Tailwind CSS/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── README.md
```

## Installation
Install Node.js and npm, open a terminal in this folder, and install the project dependencies:
```bash
npm install
```

## Run
Start the local development server:
```bash
npm run dev
```
Open the local URL printed by Vite (normally `http://localhost:5173`). Create a production build with `npm run build`.

## Demonstrate
1. Start the app using `npm run dev`.
2. Show the profile details, course, year, email link, and interest labels.
3. Resize the browser to a narrow screen and show that the card remains centered and readable.
4. Explain that Tailwind classes provide spacing, colors, layout, and responsive-friendly sizing.

## Expected Output
A centered white student profile card on a light slate background. It shows initials, student name, course, year badge, clickable email address, and three interest labels.

## Important Code
`App.jsx` stores profile information in a JavaScript object and maps the interests into list items:
```jsx
{student.interests.map((interest) => (
  <li key={interest}>{interest}</li>
))}
```
The `key` helps React identify each item. Utility classes in the markup style the card; `src/index.css` loads Tailwind's generated styles.

## Viva Questions and Answers
1. **What is React?** A JavaScript library for building component-based user interfaces.
2. **What is JSX?** A syntax extension that lets us write HTML-like markup inside JavaScript.
3. **What is a React component?** A reusable function or class that returns UI.
4. **What is Tailwind CSS?** A utility-first CSS framework for composing styles with predefined classes.
5. **What does Vite do?** It provides a fast development server and production build tool.
6. **Why is the student data stored in an object?** It keeps related profile values together and makes the component easier to update.
7. **What does `map()` do here?** It turns each interest in an array into a rendered list item.
8. **Why does a mapped list need a `key`?** React uses a stable key to track list items when rendering changes.
9. **What does the `mailto:` link do?** It asks the visitor's device to open an email application for that address.
10. **What does `npm run build` create?** An optimized production bundle, normally in the `dist` folder.

## Common Errors
- **`npm` is not recognized:** Install Node.js, reopen the terminal, then check `node --version` and `npm --version`.
- **Missing package/module:** Run `npm install` in this experiment folder.
- **Tailwind styles are missing:** Check the Tailwind directives in `src/index.css` and the `content` paths in `tailwind.config.js`.
- **Wrong dev-server folder:** Run commands from this folder, where its `package.json` is located.
- **Port already in use:** Use the alternate local URL Vite prints or stop the other dev server.

## Conclusion
This experiment builds a responsive profile card from a small React component and demonstrates how Tailwind utility classes can style a page without a large custom stylesheet.
