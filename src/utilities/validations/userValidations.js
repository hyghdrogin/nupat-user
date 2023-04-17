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

export {
	validateSignUp
};