"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
require("express-async-errors");
const routes_1 = __importDefault(require("./routes"));
require("./database");
class App {
    constructor() {
        this.server = express_1.default();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express_1.default.json());
        this.server.use('/uploads', express_1.default.static(path_1.resolve(__dirname, '..', 'uploads')));
    }
    routes() {
        this.server.use(routes_1.default);
    }
}
exports.default = new App().server;
//# sourceMappingURL=app.js.map