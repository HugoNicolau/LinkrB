import { db } from "../database/database.js";
import urlMetadata from "url-metadata";
import dayjs from "dayjs";

export async function confirmToken(token){
    return await db.query('SELECT * FROM sessions WHERE token=$1', [token]);
    
}

export async function confirmUser(userId){
    return await db.query('SELECT * FROM users WHERE id=$1',[userId]);
}

export async function posting(post){
    const {userId, link, description} = post;
    const now = dayjs();
    await db.query('INSERT INTO posts (user_id, link, description, created_at) VALUES ($1, $2, $3, $4);',[userId, link, description, now]);
    const id = await db.query('SELECT id FROM posts WHERE link=$1;'[link]);
    postMetadata(link, id.rows[0].id)
    return 
}

export async function gettingPost(){

    return await db.query('SELECT * FROM posts ORDER BY id DESC LIMIT 20;')
}

export async function postMetadata(postUrl,postId){

    const metadata = await urlMetadata(postUrl);
    const id = postId;
    return await db.query('INSERT INTO posts_metadata (post_id, title, description, link, image) VALUES ($1, $2, $3, $4, $5);'[id,metadata.title,metadata.description,metadata.url,metadata.image])
}

export async function getMetadata()