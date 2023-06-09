import { DateTime } from "luxon";

const requestLogger = async (req, res, next) => {
	console.info(`request (${DateTime.now().toISO()}): ${req.protocol}://${req.hostname}${req.originalUrl} (${req.method})`);
	return next();
};

export default requestLogger;