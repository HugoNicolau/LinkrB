import { Router } from "express";
import { validatePost } from "../middlewares/posts.middlewares.js";

const router = Router();

router.post("/post", validatePost, postPost);


export default router;