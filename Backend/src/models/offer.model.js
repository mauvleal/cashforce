module.exports = (sequelize, DataTypes) => {
    const Offer = sequelize.define('Offer', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        tax: DataTypes.STRING,
        tariff: DataTypes.STRING,
        adValorem: DataTypes.STRING,
        float: DataTypes.STRING,
        iof: DataTypes.STRING,
        expiresIn: DataTypes.DATE,
        paymentStatusSponsor: DataTypes.TINYINT,
        paymentStatusProvider: DataTypes.TINYINT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        orderId: DataTypes.INTEGER,
        sponsorId: DataTypes.INTEGER,
      }, {
        timestamps: true,
        modelName: 'Offer',
        tableName: 'offers',
        charset: 'latin1',
        sequelize,
      });
      
      Offer.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });
      Offer.belongsTo(Sponsor, { foreignKey: 'sponsorId', as: 'sponsor' });
      
      Order.hasMany(Offer, { foreignKey: 'id', as: 'offers' });
      Sponsor.hasMany(Offer, { foreignKey: 'id', as: 'offers' });
      
  
    return Offer;
    
  }