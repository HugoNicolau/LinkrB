import bcrypt from "bcrypt";
import { db } from "../database/database.js";
import { v4 as uuidV4 } from "uuid";
import { connectionDB } from "../database/db.js";

export async function signIn(req, res) {
    const { email, password } = req.body;
    const token = uuidV4();

    try {
        const sessions = await db.query(`SELECT * FROM sessions`)
        const sessionExists = sessions.rows.filter(user => user.email === email)
        if (sessionExists.length) {
            return res.status(409).send("User connected.");
        }

        const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);

        if (user.rows[0]) {
            await db.query(`INSERT INTO sessions ("user_id", token) VALUES ($1, $2, $3)`, [user.rows[0].id, token]);
            return res.send({ token }).status(200);
        } else {
            return res.status(401).send("User not found.");
        }

    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
};