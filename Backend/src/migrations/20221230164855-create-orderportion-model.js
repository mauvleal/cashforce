'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      availableToMarket: {
        defaultValue: 1,
        type: Sequelize.TINYINT(1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      orderId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'orders',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        key: 'orderId'
      }
    }, {
      charset: 'latin1'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orderportions');
  }
};
