import { Router } from "express";
import { createUser, findUserById } from "../controllers/userController.js";

const router = Router();

router.post("/register", createUser);
router.get("/:userId", findUserById);

export default router;