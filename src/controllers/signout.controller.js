import { db } from "../database/database.js";
export async function signOut(req, res){
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer ", "").replace(/"/g, " ").trim();
    if (!token) {
        return res.sendStatus(401);
    }
    try {

        const user = await db.query(`SELECT id FROM sessions WHERE token = $1`, [token]);
        if(!user.rows[0]){
            return res.sendStatus(409);
        }
        await db.query(`DELETE FROM sessions WHERE id = $1`, [user.rows[0].id]);
        return res.sendStatus(204);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}