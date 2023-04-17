import { registerUser, findUser, userUpdate } from "../services/userServices.js";
import { validateSignUp } from "../utilities/validations/userValidations.js";
import { successMessage, errorMessage, errorHandler } from "../utilities/responses.js";

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
		
		const result = await findUser(userId);

		return successMessage(res, 200, "User fetched Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

const updateUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const { name } = req.body;

		const result = await userUpdate(userId, name);
		return successMessage(res, 200, "User updated Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export {
	createUser, findUserById, updateUser
};