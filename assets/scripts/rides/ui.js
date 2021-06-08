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

      <td><button class="update-ride btn btn-outline-info">Edit</button><button class="delete-ride btn btn-danger" data-id="${ride._id}">Delete Ride</button></td>
    </tr>
    `
  }))
}

const onAddRideSuccess = function (res) {
  // console.log(res)
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

        <td><button class="update-ride btn btn-outline-info" data-toggle="modal" data-target="#update-ride-modal">Edit</button><button class="delete-ride btn btn-danger" data-id="${res.ride._id}">Delete Ride</button></td>
      </tr>
      `
  )
}

const onDeleteRideSuccess = function (res) {

}

module.exports = {
  onIndexRidesSuccess,
  onAddRideSuccess,
  // onAddNewRideFailure,
  onDeleteRideSuccess
  // onDeleteRideFailure,
  // onUpdateRidesuccess,
  // onUpdateRideFailure
}
