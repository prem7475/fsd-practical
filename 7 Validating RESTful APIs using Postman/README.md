# Experiment 7 — Validate a REST API with Postman

## 1. Experiment
**Validating a RESTful API using Postman**

## 2. Aim
Build and test a small in-memory Todo REST API, then automate its main request flow in Postman.

## 3. Objectives
- Create, read, update, and delete Todo records over HTTP.
- Return useful status codes and validate user input.
- Run the requests in order and pass the created ID to later requests.

## 4. Learning outcomes
After completing this experiment, you can explain REST routes, JSON request/response bodies, HTTP status codes, Postman environments, and automated request tests.

## 5. Prerequisites
Install Node.js 20 or later and Postman. No database is required. Data is reset when the server restarts.

## 6. Theory
REST APIs expose resources through URLs and HTTP verbs. This API uses `GET` to read, `POST` to create, `PUT` to update, and `DELETE` to remove todos. Postman scripts can check responses and save values for the next request.

## 7. Tools and requirements
- Node.js, npm, Express, and Supertest
- Postman
- `postman_collection.json` (Collection v2.1), `postman_environment.json`, and `api-tests.yaml` (OpenAPI 3.0)

## 8. Procedure
1. Open a terminal in this folder and run `npm install`.
2. Start the API with `npm start`; it listens on `http://localhost:5001`.
3. Import the collection and environment JSON files into Postman.
4. Select **Todo API - Local** and run the collection in order.
5. To reset the in-memory list, restart the API.

## 9. Implementation
The Express routes are in `backend/server.js`. Validation rejects blank titles and malformed updates. The API starts with an empty list and assigns increasing numeric IDs. Automated HTTP tests are in `backend/server.test.js`.

## 10. Run commands
```bash
npm install
npm start
# In a second terminal:
npm test
```
The npm test command can be run while the server is stopped; it starts an isolated test server.

## 11. Test cases and expected output
The Postman sequence creates a todo, lists todos, fetches and updates the saved todo, deletes it, then verifies that fetching it returns `404`. The Node test suite also covers validation and missing IDs. Successful requests return JSON and expected `2xx` status codes; invalid input returns `400`.

## 12. Result and viva questions
**Result:** A working in-memory Todo API and reusable Postman test flow are provided. Restarting the process clears data.

**Review questions:** What is the difference between `PUT` and `POST`? Why should a missing resource return `404`? How does the collection variable carry an ID between requests? What does OpenAPI describe?
