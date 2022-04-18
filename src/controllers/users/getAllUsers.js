const User = require('./../../database/models/User')

module.exports = {
  async getAllUsers (_, res) {
    const users = await User.findAll({
      where: {
        deleted_at: null
      }
    })

    return res.json(users)
  }
}
