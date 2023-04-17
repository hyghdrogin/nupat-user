import { Schema, model } from "mongoose";

const userSchema = new Schema({
	name: {
		type: String
	},
	password: {
		type: String
	},
	gender: {
		type: String, enum: ["male", "female", "others"]
	}
});

export default model("User", userSchema);