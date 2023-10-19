import express from 'express'
const router = express.Router()

import {
  createPrescriptionReminder,
  getPrescriptionReminderById,
  getPrescriptionRemindersByUser,
  getReminderTimesByUser,
  updatePrescriptionReminderById,
  deletePrescriptionReminderById,
} from '../controllers/prescriptionReminders.js'

router.route('/').post(createPrescriptionReminder)
router
  .route('/:id')
  .get(getPrescriptionReminderById)
  .patch(updatePrescriptionReminderById)
  .delete(deletePrescriptionReminderById)
router.route('/user/:id').get(getPrescriptionRemindersByUser)
router.route('/user/time/:id').get(getReminderTimesByUser)

export default router
