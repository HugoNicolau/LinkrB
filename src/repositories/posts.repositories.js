import { db } from "../database/database.js";

export async function confirmToken(token){
    return await db.query('SELECT * FROM sessions WHERE token=$1', [token]);
    
}

export async function confirmUser(userId){
    return await db.query('SELECT * FROM users WHERE id=$1',[userId]);
}

export async function posting(post){
    const {userId, link, description} = post;

    return await db.query('INSERT INTO posts (user_id, link, description) VALUES ($1, $2, $3);',[userId,link,description]);
}

export async function gettingPost(){

    return await db.query('SELECT * FROM posts ORDER BY id DESC LIMIT 20;')
}