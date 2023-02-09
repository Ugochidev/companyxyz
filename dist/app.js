"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
require("express-async-errors");
const environment_1 = __importDefault(require("./config/environment"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        require("../config/database");
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.setRoutes();
    }
    setRoutes() {
        this.app.get("/", async (request, response) => {
            response.json({
                status: true,
                message: "Welcome To Company xyz",
            });
        });
        // this.app.use("/api/v1", routes);
    }
    getApp() {
        return this.app;
    }
    listen() {
        const { port } = environment_1.default;
        this.app.listen(port, () => {
            console.log(`Listening at port ${parseInt(port)}`);
        });
    }
}
exports.default = App;
