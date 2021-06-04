'use strict'

const getFormFields = require('./../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onAddNewRide = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.addRide(data)
    .then(ui.onAddRideSuccess).catch(ui.onAddRideFailure)
}

const onDeleteRide = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.deleteRide(data)
    .then(ui.onDeleteRideSuccess).catch(ui.onDeleteRideFailure)
}

const onUpdateRide = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)

  api.updateRide(data)
    .then(ui.onUpdateRideSuccess).catch(ui.onUpdateRideFailure)
}

module.exports = {
  onAddNewRide,
  onDeleteRide,
  onUpdateRide
}
