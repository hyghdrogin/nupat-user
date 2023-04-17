import jwt from "jsonwebtoken";
import config from "../../configurations/index.js";

const secretKey = config.JWT;

const generateToken = (payload, secret = secretKey) => {
	const token = jwt.sign(payload, secret, { expiresIn: "1d" });
	return token;
};

export default generateToken;