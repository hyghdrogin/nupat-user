import { Router } from "express";
import { createUser, findUserById, updateUser } from "../controllers/userController.js";

const router = Router();

router.post("/register", createUser);
router.get("/:userId", findUserById);
router.patch("/:userId", updateUser);

export default router;