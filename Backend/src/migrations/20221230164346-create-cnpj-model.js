'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cnpjs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj: {
        type: Sequelize.STRING
      },
      companyType: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cnpjs');
  }
};
