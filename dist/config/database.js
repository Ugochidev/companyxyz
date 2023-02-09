"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require dependencies
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = __importDefault(require("./environment"));
class Database {
    async connect() {
        try {
            await mongoose_1.default.connect(environment_1.default.dburl);
            console.log("Database Connected");
        }
        catch (error) {
            console.log(error);
            throw new Error("Database not Connected");
        }
    }
}
exports.default = Database;
