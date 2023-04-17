import { errorMessage, errorHandler} from "../utilities/responses.js";

const authentication = (req, res, next) => {
	try {
		const authenticateHeader = req.headers.authorization;
		if (!authenticateHeader) {
			return errorMessage(res, 401, "Unauthorized");
		}
		const token = authenticateHeader.split(" ")[1];
		if (!token) {
			return errorMessage(res, 401, "Invalid token");
		}
		next();
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export default authentication;