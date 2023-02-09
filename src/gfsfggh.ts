import { Router } from "express";
import CreateState from "./states/controllers/createState.controllers";
import CreateLga from "./lgas/controllers/createLga.controller";
import CreateWard from "./wards/controllers/createWard.controller";
import CreateCitizen from "./citizens/controllers/createCitizen.controller";

const router = Router();
// const createUser = new CreateUser();
const createState = new CreateState();
const createLga = new CreateLga();
const createWard = new CreateWard();
const createCitizen = new CreateCitizen();

// router.post("createUser", createUser.create);
router.post("createState", createState.create);
router.post("createLga", createLga.create);
router.post("createWard", createWard.create);
router.get("createCitizen", createCitizen.create);

export default router;
