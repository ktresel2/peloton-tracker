'use strict'

const store = require('./../store')

const onSignUpSuccess = function (res) {
  $('form').trigger('reset')

  $('h1').text('Signed up Successfully')
  $('h2').text('Please log in')
}

const onSignUpFailure = function () {
  $('h1').text('Sign up Failed')
  $('h2').text('Try again')
}

const onSignInSuccess = function (res) {
  $('form').trigger('reset')
  $('h1').addClass('hide')
  $('h2').text('Welcome!')
  $('#landing').addClass('hide')
  $('table').removeClass('hide')
  $('button').removeClass('hide')
  $('#sign-back-in').addClass('hide')

  setTimeout(() => {
    $('h2').text('Make a selection.')
  }, 1000)

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
  $('p').text('Failed. Try again.').addClass('error')
}

const onSignOutFailure = function () {
  $('h2').text('Sign out error')
}

const onSignOutSuccess = function () {
  store.user = null
  $('h1').removeClass('hide')
  $('h1').text('Good-bye')
  $('h2').text('Signed out successfully')
  $('button').addClass('hide')
  $('#sign-back-in').removeClass('hide')
  $('table').addClass('hide')
}

const signBackIn = function () {
  $('h1').text('Welcome back')
  $('h2').text('Sign in')
  $('#landing').removeClass('hide')
  $('#sign-back-in').addClass('hide')
  $('table').addClass('hide')
  $('form button').removeClass('hide')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  signBackIn
}
