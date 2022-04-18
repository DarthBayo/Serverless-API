const User = require('./../../database/models/User')
const errorHandler = require('./../../helpers/errorHandler')

module.exports = {
  async updateUser (req, res) {
    const userMail = req.headers['user-mail']
    const { name, email, password } = req.body

    const foundedUser = await User.findOne({
      where: {
        email: email,
        deleted_at: null
      }
    })
    if (foundedUser?.id) { return res.status(404).json('E-mail already registered!') }

    try {
      await User.update({
        name: name,
        email: email,
        password: password
      }, {
        where: {
          email: userMail,
          deleted_at: null
        },
        limit: 1
      })

      return res.json('User updated succefully!')
    } catch ({ errors }) {
      return res.status(400).json(errorHandler.catchHandler(errors[0].message))
    }
  }
}
