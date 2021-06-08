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
  const rowBtn = e.target
  const id = $(rowBtn).parents('tr').data('id')
  console.log(id)
  api.deleteRide(id)
    .then(ui.onDeleteRideSuccess).catch(ui.onDeleteRideFailure)
}

const onUpdateRide = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.updateRide(data)
    .then(ui.onUpdateRideSuccess).catch(ui.onUpdateRideFailure)
}

module.exports = {
  onIndexRides,
  onAddNewRide,
  onDeleteRide,
  onUpdateRide
}
