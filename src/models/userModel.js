import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../database/index.js";

const User = sequelize.define("User", {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,
		unique: true
	},
	name: {
		type: DataTypes.STRING
	},
	password: {
		type: DataTypes.STRING
	},
	gender: {
		type: DataTypes.ENUM(
			"male", "female", "others"
		)
	}
}, {
	sequelize,
	tableName: "user",
	timestamps: true,
	modelName: "User"
});

(async () => {
	await sequelize.sync({ force: true });
	console.log("User Table Created Successfully");
})();

export default User;