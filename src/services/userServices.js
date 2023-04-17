import { newUser } from "../DAO/userDAO.js";

const registerUser = async (name, gender) => {
	const userDetails = {
		name, gender
	};
	const created = await newUser(userDetails);
	return created;
};

export {
	registerUser
};