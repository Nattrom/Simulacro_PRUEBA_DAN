import { Router } from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import workspaceRoutes from "./workspaceRoutes";
import reservationRoutes from "./reservationRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/workspaces", workspaceRoutes);
router.use("/reservations", reservationRoutes);

export default router;