module.exports = {
  up: (queryInterface, DataType) => {
    return queryInterface.createTable('items', {
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        type: DataType.STRING,
        allowNull: false,
      },
      title: {
        type: DataType.STRING,
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
    return queryInterface.dropTable('items');
  },
};
