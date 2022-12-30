module.exports = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('Cnpj', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        cnpj: DataTypes.STRING,
        companyType: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      }, {
        timestamps: true,
        modelName: 'Cnpj',
        tableName: 'cnpjs',
        charset: 'latin1',
        sequelize,
      });
  
    return Cnpj;
    
  }