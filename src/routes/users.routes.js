import { Router } from "express";

import { supportUser, getUserById, getMyProfile, updateMyProfile, getMySupport } from "../controllers/users.controllers.js";

const router = Router();

router.get('/users/:id', getUserById)
router.post('/users/:id/support', supportUser)

router.get('/users/me', getMyProfile)
router.put('/users/me/update', updateMyProfile)
router.get('/users/me/my-support', getMySupport)

export default router