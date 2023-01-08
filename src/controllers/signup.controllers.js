import bcrypt from "bcrypt";
import { registerUser} from "../repositories/signup.repositories.js";
import dotenv from "dotenv";
dotenv.config();

// export async function signUp(req, res) {
//     const { name, email, password, url} = res.locals;
//     const hashedPassword = bcrypt.hashSync(password, 10);

//     try {
//         await registerUser(name, email, hashedPassword, url)
//         return res.sendStatus(201);
//     } catch (err) {
//         return res.status(500).send(err.message);
//     }
// }
