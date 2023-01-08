import { Router } from "express";
import { validatePost } from "../middlewares/posts.middlewares.js";
import { postPost, getPost } from "../controllers/posts.controllers.js";

const router = Router();

router.post("/post", validatePost, postPost);
router.get("/post", getPost);


export default router;