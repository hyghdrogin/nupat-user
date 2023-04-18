import { findById } from "../dao/userDAO.js";
import { validateSignUp, validateUpdate } from "../utilities/validations/userValidations.js";
import { successMessage, errorMessage, errorHandler } from "../utilities/responses.js";
import { registerUser, findUser, userUpdate, userDelete, findAllUsers, findMale } from "../services/userServices.js";

const createUser = async (req, res) => {
	try {
		const valid = validateSignUp(req.body);
		if (valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const { name, gender } = req.body;
		const result = await registerUser(name, gender);
		return successMessage(res, 201, "User Created Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

const findUserById = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await findById(userId);
		if (!user) {
			return errorMessage(res, 404, "User not found");
		}
		const result = await findUser(userId);
		return successMessage(res, 200, "User fetched Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

const updateUser = async (req, res) => {
	try {
		const valid = validateUpdate(req.body);
		if (valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const { userId } = req.params;
		const { name } = req.body;
		const user = await findById(userId);
		if (!user) {
			return errorMessage(res, 404, "User not found");
		}
		const result = await userUpdate(userId, name);
		return successMessage(res, 200, "User updated Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

const deleteUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await findById(userId);
		if (!user) {
			return errorMessage(res, 404, "User not found");
		}
		await userDelete(userId);
		return successMessage(res, 200, "User deleted successfully");
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

const findUsers = async(req, res) => {
	try {
		
		const result = await findAllUsers();
		return successMessage(res, 200, "All Users fetched", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

const findMaleUsers = async (req, res) => {
	try {
		const { _id } = req.user;
		const { genderType } = req.params;
		const user = await findById(_id);
		if (!user) {
			return errorMessage(res, 404, "Authenticated user not found");
		}
		if (genderType !== "male") {
			return errorMessage(res, 400, "male is the only allowed gender type currently");
		}
		
		const result = await findMale(genderType);
		return successMessage(res, 200, "All male users fetched", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export {
	createUser, findUserById, updateUser, deleteUser, findUsers, findMaleUsers
};