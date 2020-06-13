"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PointItem_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize_typescript_1 = require("sequelize-typescript");
let PointItem = PointItem_1 = class PointItem extends sequelize_typescript_1.Model {
    static init(sequelize) {
        super.init({
            point_id: sequelize_1.default.INTEGER,
            item_id: sequelize_1.default.INTEGER,
            created_at: sequelize_1.default.DATE,
            updated_at: sequelize_1.default.DATE
        }, {
            sequelize
        });
        return this;
    }
    static associate(models) {
        PointItem_1.belongsTo(models.Point, { foreignKey: 'point_id' });
        PointItem_1.belongsTo(models.Item, { foreignKey: 'item_id' });
    }
};
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED
    }),
    __metadata("design:type", String)
], PointItem.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER,
        references: {
            model: 'Point',
            key: 'id'
        }
    }),
    __metadata("design:type", Number)
], PointItem.prototype, "point_id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER,
        references: {
            model: 'Item',
            key: 'id'
        }
    }),
    __metadata("design:type", Number)
], PointItem.prototype, "item_id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], PointItem.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], PointItem.prototype, "updated_at", void 0);
PointItem = PointItem_1 = __decorate([
    sequelize_typescript_1.Table({
        defaultScope: {},
        paranoid: true,
        tableName: 'point_items'
    })
], PointItem);
exports.default = PointItem;
//# sourceMappingURL=PointItem.js.map