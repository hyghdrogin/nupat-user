import { Sequelize } from "sequelize";
import config from "../configurations/index.js";

const sequelize = new Sequelize(config.DB_URI, {
	logging: false,
	dialect: "mysql"
});

export default sequelize;