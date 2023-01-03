import { Router } from "express";
import { signUp } from "../controllers/user.controllers.js";
import { validateUser} from "../middlewares/user.middlewares.js";

const router = Router();

router.post("/sign-up", validateUser, signUp)

export default router