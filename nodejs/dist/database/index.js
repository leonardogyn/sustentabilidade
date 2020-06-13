"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Item_1 = __importDefault(require("../app/models/Item"));
const Point_1 = __importDefault(require("../app/models/Point"));
const PointItem_1 = __importDefault(require("../app/models/PointItem"));
const database_1 = require("../config/database");
const models = [Item_1.default, Point_1.default, PointItem_1.default];
class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new sequelize_1.Sequelize(database_1.databaseConfig);
        models
            .map((model) => model.init(this.connection))
            .map((model) => model.associate && model.associate(this.connection.models));
    }
}
exports.default = new Database();
//# sourceMappingURL=index.js.map