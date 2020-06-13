"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('items', [
            {
                title: 'Lâmpadas',
                image: 'lampadas.svg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Pilhas e Baterias',
                image: 'baterias.svg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Papéis e Papelão',
                image: 'papeis-papelao.svg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Resíduos Eletrônicos',
                image: 'eletronicos.svg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Resíduos Orgânicos',
                image: 'organicos.svg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                title: 'Óleo de Cozinha',
                image: 'oleo.svg',
                created_at: new Date(),
                updated_at: new Date(),
            },
        ], {
            Sequelize,
        });
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('items', null, {});
    },
};
//# sourceMappingURL=20200604183140-items.js.map