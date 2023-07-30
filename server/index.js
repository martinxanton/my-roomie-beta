import cors from "cors";
import express from "express";
import config from "./config/config.js";
import { connectDB } from "./config/database.js";

const { MONGODB_URL, PORT } = config;
const app = express();
const init = async () => {
  await connectDB(MONGODB_URL);
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  });
};

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

// Inicio de la app
init();
