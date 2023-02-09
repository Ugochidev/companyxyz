"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './.env' });
exports.default = {
    port: process.env.PORT || "9000",
    nodeEnv: process.env.NODE_ENV || "production",
    saltRounds: process.env.SALT_ROUNDS || 10,
    jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET ||
        "03afc0820d376f9fdb1e8faa460902c6f74705feb01f101c480f4205964e3e10",
    dburl: process.env.DATABASE_URL || "",
};
