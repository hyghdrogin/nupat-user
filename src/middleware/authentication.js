import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import config from "../configurations/index.js";
import { errorMessage, errorHandler } from "../utilities/responses.js";

const verifyUser = async (req, res, next) => {
	try {
		if (req.headers && req.headers.authorization) {
			const parts = req.headers.authorization.split(" ");
			if (parts.length === 2) {
				const scheme = parts[0];
				const credentials = parts[1];
				if (/^Bearer$/i.test(scheme)) {
					const token = credentials;
					const decoded = jwt.verify(token, config.JWT);
					
					const user = await User.findById({ _id: decoded._id });
					if (!user) return errorMessage(res, 404, "User account not found");
					req.user = user;
					return next();
				}
			} else {
				return errorMessage(res, 401, "Invalid Authorization format");
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