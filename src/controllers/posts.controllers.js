import { posting, gettingPost } from "../repositories/posts.repositories.js";

export async function postPost(req, res){
    const post = res.locals.post;
    const { userId, link, description } = post;
    try{
        const newPost={
          userId,
          link,
          description, 
        }
        await posting(newPost);
        return res.sendStatus(201);

    }   catch(err){
        return res.status(500).send(err.message);
    }

    
}

export async function getPost(req, res){

    
    try{
        
        const posts = await gettingPost();
        return res.status(200).send(posts);
    }   catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}