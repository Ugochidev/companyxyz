import { Router } from "express";
import CreateState from "../controllers/createState.controllers";

const router = Router();
const createState = new CreateState();

router.post("/", createState.create);

export default router;
