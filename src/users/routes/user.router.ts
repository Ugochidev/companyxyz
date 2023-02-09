import { Router } from "express";
import CreateUser from "../controllers/createUser.controller";

const router = Router();
const createUser = new CreateUser();

router.post("createUser", createUser.create);

export default router;