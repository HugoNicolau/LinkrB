// tools
import express from "express";
import dotenv from "dotenv";

// route path
import users from './routes/users.routes.js';
// import signup from './routes/signup.routes.js';
import posts from './routes/posts.routes.js'

// config
const server = express();
server.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;

// routes
server.use(users);
// server.use(signup);
server.use(posts);

// listen
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})