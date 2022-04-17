import Result from '../models/Result'

module.exports = {
  index: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      Result: []
    }

    try {
      response.Result = await Result.findAll()
    } catch (err) {
      response.error = true
      response.message = err.message
      return res.status(400).json(response)
    }

    return res.status(res.statusCode).json(response)
  }
}