"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database"));
(async () => {
    try {
        const App = require("./app").default;
        const database = new database_1.default();
        await database.connect();
        const app = new App();
        app.listen();
    }
    catch (err) {
        console.error("Something went wrong when initializing the server:\n", err.stack);
    }
})();
