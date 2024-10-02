import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./database/.env" });
const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
}

export default connectDB;