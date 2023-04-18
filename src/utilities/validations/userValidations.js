import Joi from "joi";

const options = {
	stripUnknown: true,
	abortEarly: false,
	errors: {
		wrap: {
			label: ""
		}
	}

};

const validateSignUp = (signup) => {
	const userSignUp = Joi.object({
		name: Joi.string().min(5).max(100).required(),
		gender: Joi.string().valid("male", "female", "others").required()
	});
	return userSignUp.validate(signup, options);
};

const validateUpdate = (update) => {
	const userUpdate = Joi.object({
		name: Joi.string().min(5).max(100).required(),
	});
	return userUpdate.validate(update, options);
};

export {
	validateSignUp, validateUpdate
};