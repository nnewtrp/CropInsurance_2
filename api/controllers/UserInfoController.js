import UserInfo from '../models/UserInfo'

module.exports = {
  index: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      UserInfo: []
    }

    try {
      response.UserInfo = await UserInfo.findAll()
    } catch (err) {
      response.error = true
      response.message = err.message
      return res.status(400).json(response)
    }

    return res.status(res.statusCode).json(response)
  }
}