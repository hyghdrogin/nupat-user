import { registerUser } from "../services/userServices.js";
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

export {
	createUser
};