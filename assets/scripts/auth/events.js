'use strict'

const getFormFields = require('./../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.signUp(data)
    .then(ui.onSignUpSuccess).catch(ui.onSignUpFailure)
}

const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.signIn(data)
    .then(ui.onSignInSuccess).catch(ui.onSignInFailure)
}

const onChangePassword = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess).catch(ui.onChangePAsswordFailure)
}

const onSignOut = function (e) {
  api.signOut().then(ui.onSignOutSuccess).catch(ui.onSignOutFailure)
}

const onSignBackIn = function () {
  ui.signBackIn()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSignBackIn
}
