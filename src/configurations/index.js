import dotenv from "dotenv";

dotenv.config();

const config = {
	PORT: process.env.PORT,
	DB_URI: process.env.DATABASE_URL
};

Object.entries(config)
	.map(([key, value]) => {
		if (key && value) {
			return { key, value };
		}
		if (!key) {
			console.log(`Missing Key: ${key}`);
			console.error("Kindly Fix This Error");
			process.exit(1);
		}
		if (!value) {
			console.log(`Missing Value for Key: ${key}`);
			console.error("Kindly Fix This Key Error");
			process.exit(1);
		}

	});
export default config;