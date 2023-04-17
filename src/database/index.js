import mongoose from "mongoose";
import config from "../configurations/index.js";

const connect = async() => {
	mongoose.set("strictQuery", false);
	const connection = await mongoose.connect(config.DB_URI);
	if (!connection) {
		console.log("Database Connection failed, exiting now");
		process.emit("SIGTERM");
		process.exit(1);
	}
	return connection;
};

export default { connect };