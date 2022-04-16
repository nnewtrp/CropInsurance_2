const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.connect')

class User extends Model {}
User.init({
  UserID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  Email: { type: DataTypes.STRING, allowNull: false, unique: true },
  Password: { type: DataTypes.STRING, allowNull: false },
  UserGroupID: { type: DataTypes.INTEGER, allowNull: false },
  isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'User',
  indexes: [{ unique: true, fields: ['UserID'] }],
  defaultScope: {
    attributes: { exclude: ['password', 'token'] }
  },
  scopes: {
    withPassword: {
      attributes: { }
    }
  }
})

export default User