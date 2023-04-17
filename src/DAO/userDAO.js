import User from "../models/userModel.js";

const newUser = async (userDetails) => {

	const user = await User.create(userDetails);
	return user;
};

export {
	newUser
};