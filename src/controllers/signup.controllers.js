import bcrypt from "bcrypt";
import { registerUser, user, validateUserGet, linkGet, visitCount } from "../repository/user.repository.js";
import dotenv from "dotenv";
dotenv.config();