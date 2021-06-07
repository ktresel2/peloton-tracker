'use strict'

// const store = require('./../store')

const onIndexRidesSuccess = function (res) {
  $('tbody').html(`${res.forEach(ride => {
    return `
    <tr data-id="${ride._id}">
      <td>${ride.date}</td>
      <td>${ride.duration}</td>
      <td>${ride.mileage}</td>
      <td>${ride.output}</td>
      <td>${ride.calories}</td>
      <td>${ride.insturctor}</td>

      <td><button class="update-ride btn btn-outline-info">Edit</button><button class="delete-ride btn btn-danger">Delete Ride</button></td>
    </tr>
    `
  })}`)
}

const onAddNewRideSuccess = function (res) {
  $('tbody').append(`
    <tr data-id="${res.body._id}">
      <td>${res.body.date}</td>
      <td>${res.body.duration}</td>
      <td>${res.body.mileage}</td>
      <td>${res.body.output}</td>
      <td>${res.body.calories}</td>
      <td>${res.body.insturctor}</td>

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
