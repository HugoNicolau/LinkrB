import bcrypt from "bcrypt";
import { newUserSchema} from "../models/signup.models.js"
import { selectEmail } from "../repositories/signup.repositories.js";
import dotenv from "dotenv";
dotenv.config();

// export async function validateUser(req, res, next) {
//     const { email } = req.body;
//     const users = req.body;
//     const { error } = newUserSchema.validate(users, { abortEarly: false });

//     if (error) {
//         const errors = error.details.map((detail) => detail.message);
//         return res.status(422).send(errors);
//     }

//     const emailExist = await selectEmail(email)

//     if(emailExist.rowCount > 0){
//         return res.status(409).send("Email já cadastrado!")
//       }
//     res.locals = users;
//     next();
// }
