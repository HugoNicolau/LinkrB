import { db } from "../database/database.js"

export async function selectEmail(email) {
    return await db.query("SELECT * FROM users WHERE email=$1", [email]);
}

export async function registerUser(name, email, hashedPassword, url, date_id) {
    await db.query(
        `INSERT INTO users (name, email, password, picture_url, created_at) VALUES ($1, $2, $3, $4, $5);`, [name, email, hashedPassword, url, date_id]
    )
    
    return console.log("ok");
}