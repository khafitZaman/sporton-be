import express from "express";
import cors from "cors";
import authRouter from "./routers/auth.routes";
import { authenticate } from "./middlewares/auth.middlewares";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter)
app.get("/", (reg, res) => {
  res.send("Sporton backend API is running");
})
app.get("/test-middleware", authenticate, (reg, res) => {
  res.send("Endpoint ini sekarang tidak bisa diakses public");
})

export default app;