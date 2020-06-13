"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ItemController_1 = __importDefault(require("./app/controllers/ItemController"));
const PointController_1 = __importDefault(require("./app/controllers/PointController"));
const routes = express_1.Router();
routes.get('/items', ItemController_1.default.index);
routes.get('/points', PointController_1.default.index);
routes.post('/points', PointController_1.default.store);
exports.default = routes;
//# sourceMappingURL=routes.js.map