import User from "../models/userModel.js";

const newUser = async (userDetails) => {

	const user = await User.create(userDetails);
	return user;
};

const findById = async (userId) => {

	const user = await User.findById(userId);
	return user;
};

const findByIdAndUpdate = async (userId, name) => {

	const user = await User.findByIdAndUpdate(userId, { name }, { new: true });
	return user;
};

const findByIdAndDelete = async (userId) => {

	const user = await User.findByIdAndDelete(userId);
	return user;
};

const findUsers = async () => {

	const user = await User.find();
	return user;
};

const findMaleUsers = async (genderType) => {

	const maleUsers = await User.find({ gender: genderType });
	const count = await User.find({ gender: genderType }).countDocuments();
	return { count, maleUsers };
};

export {
	newUser, findById, findByIdAndUpdate, findByIdAndDelete, findUsers, findMaleUsers
};