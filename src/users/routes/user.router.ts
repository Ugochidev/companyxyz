import { Router } from "express";
import CreateUser from "../controllers/createUser.controller";

const router = Router();
const createUser = new CreateUser();

router.post("/", createUser.create);

export default router;