import PrescriptionReminder from '../models/PrescriptionReminder.js'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'

const createPrescriptionReminder = asyncWrapper(async (req, res) => {
  const reminder = await PrescriptionReminder.create(req.body)
  res.status(201).json({ reminder })
})

const getPrescriptionReminderById = asyncWrapper(async (req, res, next) => {
  const { id: pId } = req.params
  const reminder = await PrescriptionReminder.find({
    _id: pId,
  }).populate('user')

  if (!reminder) {
    return next(
      createCustomError(`No Prescription Reminder with id: ${pId}`, 404)
    )
  }
  res.status(200).json({ reminder })
})

const getPrescriptionRemindersByUser = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params
  const reminder = await PrescriptionReminder.find({
    user: userId,
  }).populate('user')

  if (!reminder) {
    return next(
      createCustomError(`No Prescription Reminder with user id: ${userId}`, 404)
    )
  }
  res.status(200).json({ reminder })
})

const getReminderTimesByUser = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params

  const reminders = await PrescriptionReminder.find({ user: userId })

  if (!reminders) {
    return next(
      createCustomError(
        `No Prescription Reminders found for user id: ${userId}`,
        404
      )
    )
  }
  const timeSlots = reminders.map((reminder) => reminder.timeSlots)

  res.status(200).json({ timeSlots })
})

const updatePrescriptionReminderById = asyncWrapper(async (req, res) => {
  const { id: pId } = req.params
  const reminder = await PrescriptionReminder.findByIdAndUpdate(
    { _id: pId },
    req.body,
    {
      new: true,
    }
  )

  if (!reminder) {
    return next(
      createCustomError(`No Prescription Reminder with id: ${pId}`, 404)
    )
  }
  res.status(200).json({ reminder })
})

const deletePrescriptionReminderById = asyncWrapper(async (req, res) => {
  const { id: pId } = req.params
  const reminder = await PrescriptionReminder.findOneAndDelete({ _id: pId })
  if (!reminder) {
    return next(
      createCustomError(`No Prescription Reminder with this id: ${pId}`, 404)
    )
  }

  res.status(200).json({ reminder })
})

export {
  createPrescriptionReminder,
  getPrescriptionReminderById,
  getPrescriptionRemindersByUser,
  getReminderTimesByUser,
  updatePrescriptionReminderById,
  deletePrescriptionReminderById,
}
