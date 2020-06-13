"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
require('dotenv/config');
exports.databaseConfig = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    options: {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        define: {
            timestamp: true,
            underscored: true,
            underscoredAll: true
        }
    }
};
//# sourceMappingURL=database.js.map