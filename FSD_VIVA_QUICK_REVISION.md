# FSD Viva Quick Revision

## React

- React: JavaScript library for building user interfaces.
- JSX: HTML-like syntax used in React JavaScript files.
- Component: Reusable function that returns UI.
- Functional component: JavaScript function that returns JSX.
- Props: Read-only data passed from parent to child.
- State: Data that can change and trigger a component re-render.
- `useState`: Stores local state.
- `useEffect`: Runs code after render or when dependencies change.
- `useContext`: Reads a shared Context value.
- Custom hook: Reusable function beginning with `use`.
- `useReducer`: Manages state using state and action values.
- Conditional rendering: Showing UI based on a condition.
- Event handling: Running a function when a user event occurs.
- Form: HTML controls used to collect input.
- Controlled component: Input value controlled by React state.
- Context API: Shares data without passing props through every level.
- Props vs state: Props enter a component; state is managed by or for a component.

## Tailwind CSS

- Tailwind: Utility-first CSS framework.
- Utility classes: Small predefined CSS classes such as `flex`, `p-4`, and `md:grid`.
- Responsive design: Layout adapts to screen size.
- Breakpoints: Screen widths such as `sm`, `md`, and `lg`.
- Flexbox: One-dimensional row or column layout.
- CSS Grid: Two-dimensional layout of rows and columns.
- CSS vs Tailwind: CSS is written separately or custom; Tailwind uses utility classes.

## Node.js and Express

- Node.js: JavaScript runtime for server applications.
- Express: Node.js framework for routes and middleware.
- npm: Package manager for Node.js.
- Middleware: Function that processes a request before a response.
- Routing: Connecting URL and HTTP method to a handler.
- REST API: API using HTTP resources and methods.
- JSON: Text format for structured data.
- GET: Read data.
- POST: Create data.
- PUT: Replace or update a complete resource.
- PATCH: Update part of a resource.
- DELETE: Remove data.
- Status codes: Numbers showing request result.
- CORS: Rules controlling cross-origin browser requests.
- Error handling: Sending useful response when operations fail.
- Request/response: Incoming data and server output objects.

## MongoDB and Mongoose

- MongoDB: Document-oriented NoSQL database.
- NoSQL: Database not primarily based on SQL tables.
- Collection: Group of MongoDB documents.
- Document: MongoDB record stored as JSON-like data.
- Mongoose: Library that models MongoDB data in Node.js.
- Schema: Structure and validation rules for documents.
- Model: Mongoose object used to query a collection.
- CRUD: Create, Read, Update, Delete.
- ObjectId: MongoDB's unique 24-character document identifier.
- Validation: Checking required fields and values.
- SQL vs NoSQL: SQL uses tables and rows; NoSQL commonly uses collections and documents.

## Security

- Authentication: Checking who the user is.
- Authorization: Checking what the user may do.
- JWT: Signed token used to identify a logged-in user.
- bcrypt: Password hashing library.
- Password hashing: One-way conversion of a password for safe storage.
- Environment variable: Configuration value outside source code.
- Rate limiting: Restricts repeated requests.
- Helmet: Adds recommended security-related HTTP headers.
- Input validation: Rejecting missing or incorrect request data.

## API Testing

- Postman: Tool for sending and testing API requests.
- Thunder Client: VS Code extension for API testing.
- Endpoint: URL plus HTTP method.
- Request body: Data sent to the server.
- Header: Metadata sent with an HTTP request.
- API response: Status, headers, and body returned by server.
- API collection: Saved group of API requests.

## WebSockets

- WebSocket: Persistent bidirectional client-server connection.
- Socket.IO: Library that simplifies WebSocket communication.
- Real-time: Data is exchanged immediately when events occur.
- HTTP vs WebSocket: HTTP is request-response; WebSocket stays connected.
- Event: Named message sent or received.

## CI/CD

- CI: Automatically builds and tests code changes.
- CD: Automatically prepares or deploys passing changes.
- Git: Version control system.
- GitHub: Website hosting Git repositories.
- GitHub Actions: Automated workflows for GitHub repositories.
- Workflow: Automated YAML job definition.
- Deployment: Making an application available to users.
- Render: Hosts backend web services.
- Vercel: Hosts frontend applications and static builds.

## Docker

- Docker: Platform for building and running containers.
- Container: Running isolated application environment.
- Docker image: Read-only packaged application template.
- Dockerfile: Instructions for creating an image.
- Docker Compose: Runs and configures multiple containers.
- Image vs container: Image is template; container is running instance.
- Docker vs VM: Containers share the host kernel; virtual machines run separate guest operating systems.
