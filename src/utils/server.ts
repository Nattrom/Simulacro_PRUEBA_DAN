import express from 'express'
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../config/swagger";
import { errorMiddleware } from "../middlewares/errorMiddleware";
import routes from "../routes";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Workspace Reservations API" });
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/', routes);
app.use(errorMiddleware);




