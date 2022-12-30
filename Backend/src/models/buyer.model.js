module.exports = (sequelize, DataTypes) => {
    const Buyer = sequelize.define('Buyer', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: DataTypes.STRING,
        tradingName: DataTypes.STRING,
        cashforceTax: DataTypes.STRING,
        responsibleName: DataTypes.STRING,
        responsibleEmail: DataTypes.STRING,
        responsiblePosition: DataTypes.STRING,
        responsiblePhone: DataTypes.STRING,
        responsibleMobile: DataTypes.STRING,
        website: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        address: DataTypes.STRING,
        number: DataTypes.STRING,
        complement: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        situation: DataTypes.STRING,
        situationDate: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        cnpjId: DataTypes.INTEGER,
        confirm: DataTypes.TINYINT,
        email: DataTypes.STRING,
      }, {
        timestamps: true,
        modelName: 'Buyer',
        tableName: 'buyers',
        charset: 'latin1',
        sequelize,
      });
      
      Buyer.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
      Cnpj.hasMany(Buyer, { foreignKey: 'id', as: 'buyers' });
      
    return Buyer;
    
  }