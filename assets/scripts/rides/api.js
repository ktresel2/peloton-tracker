'use strict'

const config = require('./../config')
const store = require('./../store')

const indexRides = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/rides',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const addRide = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/rides',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteRide = function (rideId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/rides/' + rideId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateRide = function (rideId, data) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/rides/' + rideId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  indexRides,
  addRide,
  deleteRide,
  updateRide
}
