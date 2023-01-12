// tools
import express from "express";
import dotenv from "dotenv";

// route path
import users from './routes/users.routes.js';
import signup from './routes/signup.routes.js';

// config
const server = express();
server.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;

process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"

// routes
server.use(users);
server.use(signup);

// listen
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})