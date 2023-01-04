import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();


const { Pool } = pkg;
export const connectionDB = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});
