import { Router } from "express";
import CreateLga from "../controllers/createLga.controller";

const router = Router();
const createLga = new CreateLga();

router.post("createLga", createLga.create);

export default router;
