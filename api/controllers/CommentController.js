import Comment from '../models/Comment'

module.exports = {
  index: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      Comment: []
    }

    try {
      response.Comment = await Comment.findAll()
    } catch (err) {
      response.error = true
      response.message = err.message
      return res.status(400).json(response)
    }

    return res.status(res.statusCode).json(response)
  }
}