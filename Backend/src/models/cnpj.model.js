module.exports = (sequelize, DataTypes) => {
  const CNPJ = sequelize.define('CNPJ', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    emailChecked: DataTypes.INTEGER,
    cashForceAdm: DataTypes.INTEGER,
  },
  { timestamps: false, tableName: 'cnpjs' });

  CNPJ.associate = (models) => {
    CNPJ.hasMany(models.Order, { 
      foreignKey: 'cnpjid', as: 'cnpj',
    });
  };

  return CNPJ;
};