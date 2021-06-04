'use strict'

const config = require('./../config')
const store = require('./../store')

const addRide = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/add-ride',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteRide = function (rideId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'rides' + rideId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateRide = function (data) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/rides' + store.ride._id
  })
}

module.exports = {
  addRide,
  deleteRide,
  updateRide
}
