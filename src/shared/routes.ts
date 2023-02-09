import { Router } from "express";

import userRoutes from "../users/routes/user.router"
import stateRoutes from "../states/routes/state.route"
import wardRoutes from "../wards/routes/ward.route"
import lgaRoutes from "../lgas/routes/lga.route"
import citizenRoutes from "../citizens/routes/citizen.router"

const router = Router();

router.use("/state", stateRoutes);
router.use("/lga", lgaRoutes);
router.use("/ward", wardRoutes);
router.use("/citizen", citizenRoutes);
router.use("/user", userRoutes)


export default router;
