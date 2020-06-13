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
let Item = class Item extends sequelize_typescript_1.Model {
    static init(sequelize) {
        super.init({
            image: sequelize_1.default.STRING,
            title: sequelize_1.default.STRING,
            url: {
                type: sequelize_1.default.VIRTUAL,
                get() {
                    return `${process.env.APP_URL}/uploads/${this.image}`;
                }
            },
            created_at: sequelize_1.default.DATE,
            updated_at: sequelize_1.default.DATE
        }, {
            sequelize
        });
        return this;
    }
    static associate(models) {
        this.belongsToMany(models.Point, {
            through: 'PointItem',
            foreignKey: 'item_id',
            as: 'points'
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
], Item.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Item.prototype, "image", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Item.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], Item.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], Item.prototype, "updated_at", void 0);
Item = __decorate([
    sequelize_typescript_1.Table({
        defaultScope: {},
        paranoid: true,
        tableName: 'items'
    })
], Item);
exports.default = Item;
//# sourceMappingURL=Item.js.map