module.exports = (sequelize, DataTypes) => {
    const Sponsor = sequelize.define('Sponsor', {
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
        phoneNumber: DataTypes.STRING,
        situation: DataTypes.STRING,
        situationDate: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        cnpjId: DataTypes.INTEGER,
        email: DataTypes.STRING,
      }, {
        timestamps: true,
        modelName: 'Sponsor',
        tableName: 'sponsors',
        charset: 'latin1',
        sequelize,
      });
      
      Sponsor.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
      
      Cnpj.hasMany(Sponsor, { foreignKey: 'id', as: 'sponsors' });
      
  
    return Sponsor;
    
  }