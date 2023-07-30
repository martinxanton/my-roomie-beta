import { Router } from "express";
import {register, login} from "../controllers/user_controllers.js";

const user_router = Router();

user_router.post("/register", register);
user_router.post("/login", login);

export default user_router;