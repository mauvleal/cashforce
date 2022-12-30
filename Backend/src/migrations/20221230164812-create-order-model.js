'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orderPath: {
        defaultValue: null,
        type: Sequelize.STRING,
        unique: true
      },
      orderFileName: {
        defaultValue: null,
        type: Sequelize.STRING,
        unique: true
      },
      orderOriginalName: {
        defaultValue: null,
        type: Sequelize.STRING,
        unique: true
      },
      emissionDate: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      pdfFile: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      emitedTo: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      nNf: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      CTE: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      value: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cnpjId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'cnpjs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        key: 'cnpjId'
      },
      userId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        key: 'userId'
      },
      buyerId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'buyers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        key: 'buyerId'
      },
      providerId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'providers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        key: 'providerId'
      },
      orderStatusBuyer: {
        defaultValue: '0',
        type: Sequelize.STRING,
      },
      orderStatusProvider: {
        defaultValue: '0',
        type: Sequelize.STRING
      },
      deliveryReceipt: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      cargoPackingList: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      deliveryCtrc: {
        defaultValue: null,
        type: Sequelize.STRING
      }
    }, {
      charset: 'latin1'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
