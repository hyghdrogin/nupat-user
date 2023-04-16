import app from "./server.js";
import config from "./configurations/index.js";
import sequelize from "./database/index.js";

const port = config.PORT || 5000;

(async () => {
	console.log("Awaiting Database Connection");
	await sequelize.authenticate();
	console.log("Database Connected Successfully");
	app.listen(port, () => {
		console.log(`API listening on port: ${port}`);
	});
})();