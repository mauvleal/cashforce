'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: "email"
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      mobile: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      departament: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      verificationCode: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      emailChecked: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cashforceAdm: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      }
    }, {
      Sequelize,
      tableName: 'users',
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
        {
          name: "email",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "email" },
          ]
        },
      ]
    });

  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};