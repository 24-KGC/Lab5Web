Homework 1: Simple Express API with MongoDB
Objective: Create a basic Node.js/Express.js server that connects to a MongoDB database and
implements CRUD operations for a simple resource.
Instructions:
1. Set up a new Node.js project with Express.js and Mongoose.
2. Create a MongoDB connection using Mongoose.
3. Define a Task schema with fields: title (required), description, completed
(boolean, default false), createdAt (date).
4. Implement the following API endpoints:
- GET /api/tasks - Retrieve all tasks
- POST /api/tasks - Create a new task
- GET /api/tasks/:id - Retrieve a specific task
- PUT /api/tasks/:id - Update a task
- DELETE /api/tasks/:id - Delete a task
5. Add proper error handling and validation.
6. Test all endpoints using a tool like Postman or Thunder Client.
Expected Output: A fully functional REST API that can perform CRUD operations on tasks
stored in MongoDB.
Hints:
- Use environment variables for the MongoDB connection string.
- Implement proper HTTP status codes for different scenarios.
- Add middleware for parsing JSON and handling CORS.
Homework 2: API Authentication with JWT
Objective: Extend the previous API to include user registration and login with JSON Web
Token (JWT) authentication Lab 5: Intermediate React
Instructions:
1. Create a User schema with fields: username (unique), email (unique), password
(hashed).
2. Implement password hashing using bcryptjs.
3. Create authentication endpoints:
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/auth/profile - Get user profile (protected)
4. Implement JWT token generation and verification middleware.
5. Protect the task endpoints so that users can only access their own tasks.
6. Add a userId field to the Task schema to associate tasks with users.
Expected Output: An authenticated API where users must register/login to access their
personal tasks.
Hints:
- Never store plain text passwords in the database.
- Use middleware to verify JWT tokens on protected routes.
- Include user information in the JWT payload.
Homework 3: User Authentication Frontend
Objective: Implement user authentication in the React frontend with protected routes and
persistent login state.
Instructions:
1. Create authentication components:
- Login form
- Registration form
- User profile display
2. Implement authentication context using React Context API.
3. Create protected routes that require authentication.
4. Store JWT tokens securely and implement automatic logout on token expiration.
5. Add navigation that changes based on authentication status.
6. Implement form validation for registration and login.
Expected Output: A complete authentication system where users can register, login, and
access protected content.
Hints: Lab 5: Intermediate React
- Use React Router for navigation and protected routes.
- Store tokens in localStorage but validate them on app startup.
- Implement automatic token refresh if your backend supports it.