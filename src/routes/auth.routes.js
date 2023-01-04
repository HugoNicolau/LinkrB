import { Router } from "express";
import { signIn } from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import signInSchema from "../models/signInSchema.js";

const router = Router();

router.post("/signin", signIn);

export default router;