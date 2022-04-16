import Report from '../models/Report'

module.exports = {
  index: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      Report: []
    }

    try {
      response.Report = await Report.findAll()
    } catch (err) {
      response.error = true
      response.message = err.message
      return res.status(400).json(response)
    }

    return res.status(res.statusCode).json(response)
  }
}