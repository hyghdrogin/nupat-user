import User from "../models/userModel.js";

const newUser = async (userDetails) => {

	const user = await User.create(userDetails);
	return user;
};

const findById = async (userId) => {

	const user = await User.findById(userId);
	return user;
};

const findUsers = async () => {

	const user = await User.find();
	const count = await User.find().countDocuments();
	return { count, user };
};

const findMaleUsers = async (genderType) => {

	const maleUsers = await User.find({ gender: genderType });
	const count = await User.find({ gender: genderType }).countDocuments();
	return { count, maleUsers };
};

export {
	newUser, findById, findUsers, findMaleUsers
};