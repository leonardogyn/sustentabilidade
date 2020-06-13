"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __importDefault(require("../models/Point"));
const Item_1 = __importDefault(require("../models/Item"));
const PointItem_1 = __importDefault(require("../models/PointItem"));
const index_1 = __importDefault(require("../../database/index"));
require('dotenv/config');
class PointController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Points = yield Point_1.default.findAll({
                include: [
                    {
                        model: Item_1.default,
                        as: 'items',
                        required: false,
                        attributes: ['image', 'title', 'url'],
                        through: { attributes: [] },
                        subQuery: false
                    }
                ],
                attributes: ['name', 'email', 'city', 'uf']
            });
            return res.json(Points);
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, whatsapp, latitude, longitude, city, uf, items } = req.body;
            const transaction = yield index_1.default.connection.transaction();
            try {
                const { id } = yield Point_1.default.create({
                    image: 'no-image',
                    name,
                    email,
                    whatsapp,
                    latitude,
                    longitude,
                    city,
                    uf
                }, { transaction });
                const pointItems = items.map((item_id) => {
                    return {
                        item_id,
                        point_id: id
                    };
                });
                yield PointItem_1.default.bulkCreate(pointItems, { transaction });
                yield transaction.commit();
                return res.json({ sucess: true });
            }
            catch (_a) {
                yield transaction.rollback();
                return res.json({ sucess: false });
            }
        });
    }
}
exports.default = new PointController();
//# sourceMappingURL=PointController.js.map