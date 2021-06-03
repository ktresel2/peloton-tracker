'use strict'

const getFormFields = require('./../../../lib/get-form-fields')

const api = require('./../../../../peloton-tracker/app/routes/user_routes')
const ui = require('./ui')

const onSignUp = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.router.post(data)
    .then(ui.onSignUpSuccess).catch(ui.onSignUpFailure)
}

const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.router.post(data)
    .then(ui.onSignInSuccess).catch(onSignInFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
