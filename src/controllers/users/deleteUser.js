const User = require('./../../database/models/User')
const errorHandler = require('./helpers/errorHandler')

module.exports = {
  async deleteUser (req, res) {
    const userMail = req.headers['user-mail']

    const foundedUser = await User.findOne({
      where: {
        email: userMail,
        deleted_at: null
      }
    })
    if (!foundedUser?.id) { return res.status(404).json('User not found!') }

    try {
      await User.update({
        deleted_at: new Date()
      }, {
        where: {
          email: userMail,
          deleted_at: null
        },
        limit: 1
      })

      return res.end()
    } catch ({ message }) {
      return res.status(400).json(errorHandler.catchHandler(message))
    }
  }
}
