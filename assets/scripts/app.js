'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const rideEvents = require('./rides/events')

$(() => {
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-back-in').on('click', authEvents.onSignBackIn)

  $('#index-rides').on('click', rideEvents.onIndexRides)
  $('#new-ride-form').on('submit', rideEvents.onAddNewRide)
  $('#tbody').on('click', '.delete-ride', rideEvents.onDeleteRide)
  $('#tbody').on('click', '.update-ride', rideEvents.onBeginUpdate)
  $('#update-ride-form').on('submit', rideEvents.onUpdateRide)
})
