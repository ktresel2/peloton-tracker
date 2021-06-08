'use strict'

const store = require('./../store')

const onSignUpSuccess = function (res) {
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')

  $('h1').text('Signed up Successfully')
  $('Please Log in')
}

const onSignUpFailure = function () {
  $('h1').text('Sign up Failed')
  $('h2').text('Try again')
}

const onSignInSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('h1').text('Welcome')
  $('#landing').addClass('hide')

  store.user = res.user
}

const onSignInFailure = function () {
  $('h1').text('Unsuccessful')
  $('h2').text('Username or password incorrect.')
}

const onChangePasswordSuccess = function () {
  $('#change-password-form').trigger('reset')
  $('h1').text('Password Successfully Changed')
  $('h2').text('Sign in with your new password next time!')

  $('.modal').modal('hide')
}

const onChangePasswordFailure = function () {
  $('h1').text('Unsuccessful')
  $('h2').text('Password reset failure')
}

const onSignOutFailure = function () {
  $('h2').text('Sign out error')
}

const onSignOutSuccess = function () {
  store.user = null
  $('h1').text('Good-bye')
  $('h2').text('Signed out successfully')
  $('#change-password').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#sign-back-in').removeClass('hide')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
