module.exports = (sequelize, DataTypes) => {
    const Orderportion = sequelize.define('Orderportion',{
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        nDup: DataTypes.STRING,
        dVenc: DataTypes.STRING,
        vDup: DataTypes.STRING,
        availableToMarket: DataTypes.TINYINT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        orderId: DataTypes.INTEGER,
      }, {
        timestamps: true,
        modelName: 'Orderportion',
        tableName: 'orderportions',
        charset: 'latin1',
        sequelize,
      });
      
      Orderportion.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });
      
      Order.hasMany(Orderportion, { foreignKey: 'id', as: 'Orderportions' });

    return Orderportion;
    
  }