import { connection } from "../database/database.js"

export function selectEmail(email) {
    return connection.query("SELECT * FROM public.users WHERE email=$1", [email]);
}

export function registerUser(name, email, hashedPassword, url) {
    return connection.query(
        `INSERT INTO public.users (name, email, password, url) VALUES ($1, $2, $3, #4);`, [name, email, hashedPassword, url]
    );
}