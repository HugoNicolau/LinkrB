import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { connectionDB } from "../database/db.js";

export async function signIn(req, res) {
    const { email, password } = req.body;
    const token = uuidV4();

    try {
        const sessions = await connectionDB.query(`SELECT * FROM sessions`)
        const sessionExists = sessions.rows.filter(user => user.email === email)
        console.log(sessionExists.length)
        if (sessionExists.length) {
            return res.status(409).send("User connected.");
        }

        const user = await connectionDB.query(`SELECT * FROM users WHERE email = $1`, [email]);

        if (user.rows[0] && bcrypt.compareSync(password, user.rows[0].password)) {
            await connectionDB.query(`INSERT INTO sessions ("user_id", email, token) VALUES ($1, $2, $3)`, [user.rows[0].id, user.rows[0].email, token]);
            return res.send({ token }).status(200);
        } else {
            return res.status(401).send("User not found.");
        }

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};