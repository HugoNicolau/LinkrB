import express from "express";
import cors from "cors";
import signIn from "./routes/auth.routes.js"

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(signIn);


app.listen(5000, () => {
    console.log("App running in port 5000");
})