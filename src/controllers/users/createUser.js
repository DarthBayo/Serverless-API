const User = require('./../../database/models/User')
const errorHandler = require('./../../helpers/errorHandler')

module.exports = {
  async createUser (req, res) {
    const { name, email, password } = req.body

    const [newUser, isNewRecord] = await User.findOrBuild({
      where: {
        email: email,
        deleted_at: null
      }
    })

    if (isNewRecord) {
      try {
        newUser.name = name
        newUser.password = password

        await newUser.save()

        return res.status(201).json(newUser.id)
      } catch ({ errors }) {
        return res.status(400).json(errorHandler.catchHandler(errors[0].message))
      }
    }

    res.json('E-mail already registered!')
  }
}
