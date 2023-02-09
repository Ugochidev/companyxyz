import express from "express";
import { Request, Response } from "express";
import helmet from "helmet";
import "express-async-errors";
import environment from "./config/environment";
import logger from "morgan";
import routes from "./shared/routes"
import mongoose from 'mongoose';

export default class App {
  app: express.Application;
  constructor() {
    this.app = express();
    require("./config/database");
    this.app.use(helmet());
    this.app.use(express.json());
    this.setRoutes();
  }

  setRoutes() {
    this.app.get("/", async (request: Request, response: Response) => {
      response.json({
        status: true,
        message: "Welcome To Company xyz",
      });
    });
    mongoose.set("strictQuery", false);
    this.app.use("/api/v1", routes);
  }

  getApp() {
    return this.app;
  }

  listen() {
    const { port } = environment;
    this.app.listen(port, () => {
      console.log(`Listening at port ${parseInt(port)}`);
    });
  }
}
