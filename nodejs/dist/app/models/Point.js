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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize_typescript_1 = require("sequelize-typescript");
let Point = class Point extends sequelize_typescript_1.Model {
    static init(sequelize) {
        super.init({
            image: sequelize_1.default.STRING,
            name: sequelize_1.default.STRING,
            email: sequelize_1.default.STRING,
            whatsapp: sequelize_1.default.STRING,
            latitude: sequelize_1.default.DECIMAL,
            longitude: sequelize_1.default.DECIMAL,
            city: sequelize_1.default.STRING,
            uf: sequelize_1.default.STRING,
            created_at: sequelize_1.default.DATE,
            updated_at: sequelize_1.default.DATE
        }, {
            sequelize
        });
        return this;
    }
    static associate(models) {
        this.belongsToMany(models.Item, {
            through: 'PointItem',
            foreignKey: 'point_id',
            as: 'items'
        });
    }
};
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", String)
], Point.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Point.prototype, "image", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Point.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Point.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Point.prototype, "whatsapp", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.DECIMAL
    }),
    __metadata("design:type", Number)
], Point.prototype, "latitude", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.DECIMAL
    }),
    __metadata("design:type", Number)
], Point.prototype, "longitude", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Point.prototype, "city", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Point.prototype, "uf", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], Point.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], Point.prototype, "updated_at", void 0);
Point = __decorate([
    sequelize_typescript_1.Table({
        defaultScope: {},
        paranoid: true,
        tableName: 'points'
    })
], Point);
exports.default = Point;
//# sourceMappingURL=Point.js.map