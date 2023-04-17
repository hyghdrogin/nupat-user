import User from "../models/userModel.js";
import { validateToken } from "../utilities/jwt/index.js";
import { errorMessage, errorHandler } from "../utilities/responses.js";

const verifyUser = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (req.headers && authHeader) {
			const headerSplit = authHeader.split(",");
			if (headerSplit.length === 2) {
				const token = headerSplit[1];
				if (/^Bearer^/.test(headerSplit[0])) {
					const decodedToken = validateToken(token);
					const user = await User.findById({ _id: decodedToken.id});
					if (!user) {
						return errorMessage(res, 404, "User not found");
					}
					req.user = user;
					next();
				}
			} else {
				return errorMessage(res, 401, "Invalid Authorization formats");
			}
		} else {
			return errorMessage(res, 401, "Authorization not found");
		}
	} catch (error) {
		errorHandler(req, res);
		return errorMessage(res, 500, error.message);
	}
};

export {
	verifyUser
};