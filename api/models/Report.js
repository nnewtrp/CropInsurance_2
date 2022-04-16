const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.connect')

class Report extends Model {}
Report.init({
  ReportID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  SenderID: { type: DataTypes.INTEGER, allowNull: false },
  ReceiverID: { type: DataTypes.INTEGER, allowNull: false },
  StatusID: { type: DataTypes.INTEGER, allowNull: false },
  Date: { type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
  Title: { type: DataTypes.STRING, allowNull: false },
  Detail: { type: DataTypes.STRING, allowNull: false },
  Picture: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  Province: { type: DataTypes.STRING, allowNull: false },
  District: { type: DataTypes.STRING, allowNull: false },
  SubDistrict: { type: DataTypes.STRING, allowNull: false },
  MoreAddress: { type: DataTypes.STRING, allowNull: false },
  LatLong: { type: DataTypes.STRING, allowNull: false },
  fullAddress: {
    type: DataTypes.VIRTUAL,
    get () {
      return `${this.MoreAddress}, ${this.SubDistrict}, ${this.District}, ${this.Province}`
    },
    set (value) {
      throw new Error('Do not try to set the `fullAddress` value!')
    }
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'Report',
  indexes: [{ unique: true, fields: ['ReportID'] }],
})

export default Report