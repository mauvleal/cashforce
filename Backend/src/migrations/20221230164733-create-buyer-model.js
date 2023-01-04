'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpjid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model:'cnpjs', key: 'id' }
      },
      name: {
        type: Sequelize.STRING
      },
      tradingName: {
        type: Sequelize.STRING
      },
      cashforceTax: {
        type: Sequelize.STRING
      },
      confirm: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
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
    await queryInterface.dropTable('buyers');
  }
};
