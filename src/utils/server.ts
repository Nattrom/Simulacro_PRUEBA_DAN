import express from 'express'
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../docs/swagger";
//import { errorMiddleware } from "../middlewares/errorMiddleware";
import routes from "../routes/index.js";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Workspace Reservations API" });
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/', routes);
//app.use(errorMiddleware);






