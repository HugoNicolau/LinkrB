import bcrypt from "bcrypt";
import { registerUser} from "../repositories/signup.repositories.js";
import dotenv from "dotenv";
import { generateDate } from "../models/createDate.models.js";
dotenv.config();

export async function signUp(req, res) {
    const { name, email, password, url} = res.locals;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const date_id = await generateDate();

    try {
        await registerUser(name, email, hashedPassword, url, date_id.id)
        return res.status(201).send('User created successfully');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
