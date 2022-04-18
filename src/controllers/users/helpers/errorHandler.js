module.exports = {
  catchHandler (error) {
    /**
     * E-mail error message validation
     */
    if (error.match(/(isEmail)/g)) {
      return 'E-mail pattern is not valid. Try example@something.com.'
    }

    return error
  }
}
