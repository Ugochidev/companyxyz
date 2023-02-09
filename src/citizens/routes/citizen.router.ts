import { Router } from "express";
import CreateCitizen from "../controllers/createCitizen.controller";

const router = Router();
const createCitizen = new CreateCitizen();

router.post("createCitizen", createCitizen.create);

export default router;
