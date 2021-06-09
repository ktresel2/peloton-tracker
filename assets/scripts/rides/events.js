'use strict'

const getFormFields = require('./../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onIndexRides = function () {
  api.indexRides()
    .then(ui.onIndexRidesSuccess).catch(ui.onIndexRidesFailure)
}

const onAddNewRide = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.addRide(data)
    .then(ui.onAddRideSuccess).catch(ui.onAddRideFailure)
}

const onDeleteRide = function (e) {
  const id = $(e.target).data('id')
  api.deleteRide(id)
    .then(ui.onDeleteRideSuccess).then(() => onIndexRides()).catch(ui.onDeleteRideFailure)
}

const onUpdateRide = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  const id = $(e.target).data('id')

  api.updateRide(id, data)
    .then(ui.onUpdateRideSuccess).then(() => onIndexRides()).catch(ui.onUpdateRideFailure)
}

const onBeginUpdate = function (e) {
  const id = $(e.target).data('id')
  $('#update-ride-form').data('id', id)

  // For trying to pre-fill the form - work on later
  // console.log(e.target.parentNode.parentNode.childNodes)
}

module.exports = {
  onIndexRides,
  onAddNewRide,
  onDeleteRide,
  onUpdateRide,
  onBeginUpdate
}
