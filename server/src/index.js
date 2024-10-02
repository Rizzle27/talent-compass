// * Essential Imports *
import express from "express";
import dotenv from "dotenv";

// * Constants Imports *
import { API_SHORT } from "../constants.js";

// * Routes Imports *
import candidateRouter from "./routes/candidates.routes.js";

import connectDB from "../database/database.js";

dotenv.config({ path: "./database/.env" });
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// * Routes Uses *
app.use(API_SHORT, candidateRouter);

const initialize = async () => {
  try {
    await connectDB();
    app.listen(PORT || 3000, () => {
      console.log(`App corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al inicializar:", error)
  }
}

initialize();