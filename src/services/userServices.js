import { newUser, findById, findByIdAndUpdate } from "../dao/userDAO.js";
import generateToken from "../utilities/jwt/generateToken.js";


const registerUser = async (name, gender) => {
	const userDetails = {
		name, gender
	};
	const created = await newUser(userDetails);
	return created;
};

const findUser = async (userId) => {

	const foundUser =  await findById(userId);
	const token = generateToken({ userId });
	return { foundUser, token };
};

const userUpdate = async (userId, name) => {
	const userToUpdate = await findByIdAndUpdate(userId, name);
	return userToUpdate;
};

export {
	registerUser, findUser, userUpdate
};