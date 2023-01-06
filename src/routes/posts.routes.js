import { Router } from "express";

const router = Router();

router.post("/post", validatePost, postPost);


export default router;