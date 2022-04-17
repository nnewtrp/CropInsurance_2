const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.connect')

class Comment extends Model {}
Comment.init({
  CommentID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  ReportID: { type: DataTypes.INTEGER, allowNull: false },
  UserID: { type: DataTypes.INTEGER, allowNull: false },
  Comment: { type: DataTypes.STRING, allowNull: false },
  Date: { type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
  Picture: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'Comment',
  indexes: [{ unique: true, fields: ['CommentID'] }],
})

export default Comment