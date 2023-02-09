import { Router } from "express";
import CreateWard from "../controllers/createWard.controller";

const router = Router();
const createWard = new CreateWard();

router.post("createWard", createWard.create);

export default router;
