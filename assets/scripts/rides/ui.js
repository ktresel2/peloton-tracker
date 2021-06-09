'use strict'

// const store = require('./../store')

const onIndexRidesSuccess = function (res) {
  console.log(res.rides)
  $('#tbody').html(res.rides.map(ride => {
    return `
    <tr data-id="${ride._id}">
      <td>${ride.date}</td>
      <td>${ride.duration}</td>
      <td>${ride.mileage}</td>
      <td>${ride.output}</td>
      <td>${ride.calories}</td>
      <td>${ride.instructor}</td>

      <td>
        <button class="update-ride btn btn-outline-info" data-toggle="modal" data-target="#update-ride-modal" data-id="${ride._id}">Edit</button>
        <button class="delete-ride btn btn-danger" data-id="${ride._id}">Delete Ride</button>
      </td>
    </tr>
    `
  }))
}

const onIndexRidesFailure = function () {
  $('h2').text('Could not find rides!')
}

const onAddRideSuccess = function (res) {
  $('#new-ride-form').trigger('reset')
  $('.modal').modal('hide')
  $('#tbody').append(`
      <tr data-id="${res.ride._id}">
        <td>${res.ride.date}</td>
        <td>${res.ride.duration}</td>
        <td>${res.ride.mileage}</td>
        <td>${res.ride.output}</td>
        <td>${res.ride.calories}</td>
        <td>${res.ride.instructor}</td>

        <td>
          <button class="update-ride btn btn-outline-info" data-toggle="modal" data-target="#update-ride-modal" data-id="${res.ride._id}">Edit</button>
          <button class="delete-ride btn btn-danger" data-id="${res.ride._id}">Delete Ride</button>
        </td>
      </tr>
      `
  )
  $('h1').text('')
  $('h2').text('Ride added!')
}

const onAddNewRideFailure = function () {
  $('h2').text('Something went wrong. Try again.!')
  $('h2').addClass('error')
}

const onDeleteRideSuccess = function (res) {
  $('h1').text('')
  $('h2').text('Ride Deleted!')
}

const onDeleteRideFailure = function () {
  $('h2').text('Could not delete the ride you\'re looking for!')
  $('h2').addClass('error')
}

const onUpdateRideSuccess = function () {
  $('h2').text('Ride updated!')
  $('.modal').modal('hide')
  $('form').trigger('reset')
}

const onUpdateRideFailure = function () {
  $('h2').text('Error updating ride!')
  $('h2').addClass('error')
}

module.exports = {
  onIndexRidesSuccess,
  onIndexRidesFailure,
  onAddRideSuccess,
  onAddNewRideFailure,
  onDeleteRideSuccess,
  onDeleteRideFailure,
  onUpdateRideSuccess,
  onUpdateRideFailure
}
