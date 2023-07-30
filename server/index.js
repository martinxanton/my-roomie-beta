import cors from "cors";
import express from "express";
import config from "./config/config.js";
import { connectDB } from "./config/database.js";
import posts_router from "./routes/posts_routes.js";

const { MONGODB_URL, PORT } = config;
const app = express();
const init = async () => {
  await connectDB(MONGODB_URL);
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/posts/", posts_router);

// Inicio de la app
init();
