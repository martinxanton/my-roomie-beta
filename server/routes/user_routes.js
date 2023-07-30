import {Router} from "express";
import {login, register} from "../controllers/user_controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);

export default authRoutes;