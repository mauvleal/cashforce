module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        orderNfId: DataTypes.STRING,
        orderNumber: DataTypes.STRING,
        orderPath: DataTypes.STRING,
        orderFileName: DataTypes.STRING,
        orderOriginalName: DataTypes.STRING,
        emissionDate: DataTypes.STRING,
        pdfFile: DataTypes.STRING,
        emitedTo: DataTypes.STRING,
        nNf: DataTypes.STRING,
        CTE: DataTypes.STRING,
        value: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        cnpjId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        buyerId: DataTypes.INTEGER,
        providerId: DataTypes.INTEGER,
        orderStatusBuyer: DataTypes.STRING,
        orderStatusProvider: DataTypes.STRING,
        deliveryReceipt: DataTypes.STRING,
        cargoPackingList: DataTypes.STRING,
        deliveryCtrc: DataTypes.STRING,
      }, {
        timestamps: true,
        tableName: 'orders',
        modelName: 'Order',
        charset: 'latin1',
        sequelize,
      });
      
      Order.associate = (models) => {
        Order.belongsTo(models.CNPJ, { 
          foreignKey: 'cnpjid', as: 'cnpj',
        });
    
        Order.belongsTo(models.User, { 
          foreignKey: 'userid', as: 'user',
        });
    
        Order.belongsTo(models.Buyer, { 
          foreignKey: 'buyerid', as: 'buyer',
        });
    
        Order.belongsTo(models.Provider, { 
          foreignKey: 'providerid', as: 'provider',
        });
      };
      
    return Order;
    
  }