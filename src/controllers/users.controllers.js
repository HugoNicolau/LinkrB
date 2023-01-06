import { db } from "../database/database.js";
import { idSchema } from "../models/users.models.js";

export async function getUserById ( req, res ) {
    const { user } = res.locals.params;

    try {
        const info = await db.query(`
        SELECT
            profiles.picture, users.name, dates.*, COUNT(posts) AS posts, SUM(post_likes.likes) AS likes COUNT(supports) AS supports
        FROM
            profiles
        JOIN
            users
        ON
            profiles.user_id = users.id
        JOIN
            dates
        ON
        JOIN
            posts
        ON

        JOIN
            likes
        ON

        JOIN
            supports
        ON
        
        GROUP BY profiles.picture, users.name, dates.*
        WHERE user_id = $1;`, [user.id]);
        const profile = info.rows[0];

        return res.status(200).send(profile);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function supportUser ( req, res ) {
    return res.status().send();
};

export async function getMyProfile ( req, res ) {
    return res.status().send();
};

export async function updateMyProfile ( req, res ) {
    return res.status().send();
};

export async function getMySupport ( req, res ) {
    return res.status().send();
};