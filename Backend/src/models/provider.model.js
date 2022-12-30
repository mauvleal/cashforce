module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('Provider', {
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
        bank: DataTypes.STRING,
        bankAgency: DataTypes.STRING,
        account: DataTypes.STRING,
        documents: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        situation: DataTypes.STRING,
        situationDate: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        cnpjId: DataTypes.INTEGER,
        email: DataTypes.STRING,
      }, {
        timestamps: true,
        modelName: 'Provider',
        tableName: 'providers',
        charset: 'latin1',
        sequelize,
      });
      
      Provider.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
      
      Cnpj.hasMany(Provider, { foreignKey: 'id', as: 'providers' });
  
    return Provider;
    
  }