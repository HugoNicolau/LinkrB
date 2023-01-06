import { db } from "../database/database.js";

export function confirmToken(token){
    return db.query('SELECT * FROM sessions WHERE token=$1', [token]);
}

export function confirmUser(userId){
    return db.query('SELECT * FROM users WHERE id=$1',[userId]);
}