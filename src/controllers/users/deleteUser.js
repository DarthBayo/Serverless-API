const User = require('./../../database/models/User')
const errorHandler = require('./../../helpers/errorHandler')

module.exports = {
  async deleteUser (req, res) {
    const { userEmail } = req.params

    const foundedUser = await User.findOne({
      where: {
        email: userEmail,
        deleted_at: null
      }
    })
    if (!foundedUser?.id) { return res.status(404).json('User not found!') }

    try {
      await User.update({
        deleted_at: new Date()
      }, {
        where: {
          email: userEmail,
          deleted_at: null
        },
        limit: 1
      })

      return res.end()
    } catch ({ errors }) {
      return res.status(400).json(errorHandler.catchHandler(errors[0].message))
    }
  }
}
