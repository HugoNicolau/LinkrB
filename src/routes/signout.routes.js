import { Router } from "express";
import { signOut } from "../controllers/signout.controller.js";

const router = Router();

router.delete("/signout", signOut);

export default router;