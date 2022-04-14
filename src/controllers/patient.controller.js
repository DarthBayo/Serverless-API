module.exports = {
  async getPatient (_, res) {
    return res.json({
      message: 'Hello, World!'
    })
  }
}
