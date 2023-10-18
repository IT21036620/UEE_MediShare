import Appointment from '../models/Appointment.js'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'

const createAppointment = asyncWrapper(async (req, res) => {
  const appointment = await Appointment.create(req.body)
  res.status(201).json({ appointment })
})

const getAppointmentById = asyncWrapper(async (req, res, next) => {
  const { id: aId } = req.params
  const appointment = await Appointment.find({
    _id: aId,
  }).populate('user')

  if (!appointment) {
    return next(createCustomError(`No Appointment with id: ${aId}`, 404))
  }
  res.status(200).json({ appointment })
})

const getAppointmentsByUser = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params
  const appointment = await Appointment.find({
    user: userId,
  }).populate('user')

  if (!appointment) {
    return next(createCustomError(`No User with id: ${userId}`, 404))
  }
  res.status(200).json({ appointment })
})

const updateAppointmentById = asyncWrapper(async (req, res) => {
  const { id: aId } = req.params
  const appointment = await Appointment.findByIdAndUpdate(
    { _id: aId },
    req.body,
    {
      new: true,
    }
  )

  if (!appointment) {
    return next(createCustomError(`No Appointment with id: ${aId}`, 404))
  }
  res.status(200).json({ appointment })
})

const deleteAppointmentById = asyncWrapper(async (req, res) => {
  const { id: aId } = req.params
  const appointment = await Appointment.findOneAndDelete({ _id: aId })
  if (!appointment) {
    return next(createCustomError(`No Appointment with this id: ${aId}`, 404))
  }

  res.status(200).json({ appointment })
})

export {
  createAppointment,
  getAppointmentById,
  getAppointmentsByUser,
  updateAppointmentById,
  deleteAppointmentById,
}
