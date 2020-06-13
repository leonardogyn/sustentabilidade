"use strict";
module.exports = {
    up: (queryInterface, DataType) => {
        return queryInterface.createTable('point_items', {
            id: {
                type: DataType.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            point_id: {
                type: DataType.INTEGER,
                references: {
                    model: 'points',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false,
            },
            item_id: {
                type: DataType.INTEGER,
                references: {
                    model: 'items',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false,
            },
            created_at: {
                type: DataType.DATE,
                allowNull: false,
            },
            updated_at: {
                type: DataType.DATE,
                allowNull: false,
            },
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('point_items');
    },
};
//# sourceMappingURL=20200603174035-create-point_items.js.map