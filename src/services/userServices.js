import generateToken from "../utilities/jwt/generateToken.js";
import { newUser, findById, findByIdAndUpdate, findByIdAndDelete, findUsers, findMaleUsers } from "../dao/userDAO.js";


const registerUser = async (name, gender) => {
	const userDetails = {
		name, gender
	};
	const created = await newUser(userDetails);
	return created;
};

const findUser = async (userId) => {

	const foundUser =  await findById(userId);
	const token = generateToken({ _id: userId });
	return { foundUser, token };
};

const userUpdate = async (userId, name) => {
	const userToUpdate = await findByIdAndUpdate(userId, name);
	return userToUpdate;
};

const userDelete = async (userId) => {
	
	const deleteUser = await findByIdAndDelete(userId);
	return deleteUser;
};

const findAllUsers = async () => {

	const allUsers = await findUsers();
	return allUsers;
};

const findMale = async (genderType) => {

	const maleUsers = await findMaleUsers(genderType);
	return maleUsers;
};
export {
	registerUser, findUser, userUpdate, userDelete, findAllUsers, findMale
};