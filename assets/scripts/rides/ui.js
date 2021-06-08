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

      <td><button class="update-ride btn btn-outline-info">Edit</button><button class="delete-ride btn btn-danger">Delete Ride</button></td>
    </tr>
    `
  }))
}

const onAddNewRideSuccess = function (res) {
  $('#tbody').append(`
    <tr data-id="${res.ride._id}">
      <td>${res.ride.date}</td>
      <td>${res.ride.duration}</td>
      <td>${res.ride.mileage}</td>
      <td>${res.ride.output}</td>
      <td>${res.ride.calories}</td>
      <td>${res.ride.insturctor}</td>

      <td><button class="update-ride btn btn-outline-info" data-toggle="modal" data-target="#update-ride-modal">Edit</button><button class="delete-ride btn btn-danger">Delete Ride</button></td>
    </tr>
    `)
}

module.exports = {
  onIndexRidesSuccess,
  onAddNewRideSuccess
  // onAddNewRideFailure,
  // onDeleteRideSuccess,
  // onDeleteRideFailure,
  // onUpdateRidesuccess,
  // onUpdateRideFailure
}
