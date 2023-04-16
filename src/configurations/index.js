import dotenv from "dotenv";
import pkg from "lodash";

const { isEmpty } = pkg;

dotenv.config();

const config = {
	PORT: process.env.PORT,
	DB_URI: process.env.DATABASE_URL
};

const absentConfig = Object.entries(config)
	.map(([key, value]) => [key, !!value])
	.filter(([, value]) => !value)
	.map(([key]) => [key]);

if (isEmpty(absentConfig)) {
	throw new Error(`Missing config key/value: ${absentConfig.join(",")}`);
}
export default config;