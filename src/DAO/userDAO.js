import User from "../models/userModel.js";

const newUser = async (userDetails) => {

	const user = await User.create(userDetails);
	return user;
};

const findById = async(userId) => {

	const user = await User.findById(userId);
	return user;
};

export {
	newUser, findById
};