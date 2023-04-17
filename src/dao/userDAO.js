import User from "../models/userModel.js";

const newUser = async (userDetails) => {

	const user = await User.create(userDetails);
	return user;
};

const findById = async(userId) => {

	const user = await User.findById(userId);
	return user;
};

const findByIdAndUpdate = async (userId, name) => {

	const user = await User.findByIdAndUpdate(userId, { name }, { new: true });
	return user;
};

export {
	newUser, findById, findByIdAndUpdate
};