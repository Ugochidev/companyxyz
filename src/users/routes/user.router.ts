import { Router } from "express";
import CreateUser from "../controllers/createUser.controller";
import LoginUser from "../controllers/LoginUser.controller";

const router = Router();
const createUser = new CreateUser();
const login = new LoginUser();

router.post("/", createUser.create);
router.post("/login", login.session);

export default router;
