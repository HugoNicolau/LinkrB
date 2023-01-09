import { Router } from "express";
import { signIn } from "../controllers/signin.controllers.js";

import signInSchema from "../models/signInSchema.js";

const router = Router();

router.post("/signin", signIn);

export default router;