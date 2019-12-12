const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        number: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        reference: DataTypes.STRING
      },
      {
        sequelize: connection
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Address;
