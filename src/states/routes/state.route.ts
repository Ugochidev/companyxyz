import { Router } from "express";
import CreateState from "../controllers/createState.controllers";

const router = Router();
const createState = new CreateState();

router.post("createState", createState.create);

export default router;
