import { db } from "../database/database.js"

export function selectEmail(email) {
    return db.query("SELECT * FROM users WHERE email=$1", [email]);
}

export function registerUser(name, email, hashedPassword) {
    return db.query(
        `INSERT INTO users (name, email, password, url) VALUES ($1, $2, $3, $4);`, [name, email, hashedPassword, url]
    );
}
