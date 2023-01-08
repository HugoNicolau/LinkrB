import { Router } from "express";
import { signUp } from "../controllers/signup.controllers.js";
import { validateUser} from "../middlewares/signup.middlewares.js";

// const router = Router();

// router.post("/sign-up", validateUser, signUp)

// export default router