const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.connect')

class Result extends Model {}
Result.init({
  ResultID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  ReportID: { type: DataTypes.INTEGER, allowNull: false },
  Result: { type: DataTypes.STRING, allowNull: false },
  Date: { type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
  Picture: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'Result',
  indexes: [{ unique: true, fields: ['ResultID'] }],
})

export default Result