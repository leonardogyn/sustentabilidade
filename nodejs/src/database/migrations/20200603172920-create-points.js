module.exports = {
  up: (queryInterface, DataType) => {
    return queryInterface.createTable('points', {
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
      name: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      whatsapp: {
        type: DataType.STRING,
        allowNull: false,
      },
      latitude: {
        type: DataType.DECIMAL,
        allowNull: false,
      },
      longitude: {
        type: DataType.DECIMAL,
        allowNull: false,
      },
      city: {
        type: DataType.STRING,
        allowNull: false,
      },
      uf: {
        type: DataType.STRING(2),
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
    return queryInterface.dropTable('points');
  },
};
