import { posting } from "../repositories/posts.repositories";



export async function postPost(req, res){
    const post = res.locals.post;
    const { userId, link, description } = post;
    // try{
    //     const newPost
    //     await posting()
    //     return res.sendStatus(201);

    // }   catch(err){
    //     return res.status(500).send(err.message);
    // }

    
}