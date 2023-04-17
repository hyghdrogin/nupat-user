import app from "./server.js";
import config from "./configurations/index.js";
import database from "./database/index.js";

const port = config.PORT;

(async () => {
	console.log("Awaiting Database Connection");
	await database.connect();
	console.log("Database Connected Successfully");
	app.listen(port, () => {
		console.log(`API listening on port: ${port}`);
	});
})();