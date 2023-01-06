import { postSchema } from "../models/posts.models.js";
import { confirmToken, confirmUser } from "../repositories/posts.repositories.js";

export async function validatePost(req, res, next){
    const post = req.body;
    const { userId, link, description } = post;
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if(!token){
        return res.sendStatus(401);
    }


    const { error } = postSchema.validate(post, {abortEarly:false});
    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send({errors});
    }

    const tokenExist = await confirmToken(token);
    
    if(tokenExist.rowCount<1){
        return res.sendStatus(401);
    }

    const userExist = await confirmUser(userId);
    if(userExist.rowCount<1){
        return res.sendStatus(401);
    }


    res.locals.post = post;
    next();
}