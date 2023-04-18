import express from "express";
import cors from "cors";
import requestLogger from "./utilities/requestLogger.js";
import router from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(requestLogger);
app.use("/api", router);

app.get("/", (req, res) => {
	res.send("Welcome to Nupat User API");
});

app.use((req, res) => res.status(404).send({
	error: "Invalid Route",
	message: "Check the route and retry"
}));

export default app;