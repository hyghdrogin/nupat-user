import { newUser, findById } from "../DAO/userDAO.js";


const registerUser = async (name, gender) => {
	const userDetails = {
		name, gender
	};
	const created = await newUser(userDetails);
	return created;
};

const findUser = async (userId) => {

	const foundUser =  await findById(userId);
	return foundUser;
};

export {
	registerUser, findUser
};