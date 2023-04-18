import { Router } from "express";
import {
	createUser, deleteUser, findMaleUsers, findUserById, findUsers, updateUser
} from "../controllers/userController.js";
import { verifyUser } from "../middleware/authentication.js";

const router = Router();

router.post("/users/register", createUser);

router.get("/users/gender/:genderType", verifyUser, findMaleUsers);
router.get("/users/:userId", findUserById);
router.get("/users/", findUsers);

router.patch("/users/:userId", updateUser);

router.delete("/users/:userId", deleteUser);

export default router;