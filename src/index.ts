import express from "express";
import mongoose from "mongoose";
import DotEnv from "dotenv";
import bodyParser from "body-parser";
import { createServer } from "http";
import cors from "cors";
import { Server } from "socket.io";
DotEnv.config();
import Config from "./config";
import router from "./routes";

const server = async () => {
  try {
    const app = express();
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
      cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"],
        credentials: true,
      },
      transports: ["websocket", "polling"],
      path: "/socket.io",
    });
    app.use(bodyParser.json());
    app.use(
      cors({
        origin: function (origin, callback) {
          callback(null, true); // ✅ Dynamically allow all origins
        },
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allow only these methods
        credentials: true, // Allow cookies and credentials to be sent with requests
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
    app.use((req: any, res, next) => {
      console.log(req.path);
      req.io = io;
      next();
    });
    app.use("/", router);

    await mongoose.connect(Config.DB_PATH as string);

    httpServer.listen(Config.PORT, () => {
      console.log(`Server running on Port ${Config.PORT}`);
      console.log(`WebSocket server is ready`);
    });
  } catch (error) {
    console.error("Error : ", error);
  }
};

export default server();
