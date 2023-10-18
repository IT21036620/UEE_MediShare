import express from 'express'
const router = express.Router()

import {
  createAppointment,
  getAppointmentById,
  getAppointmentsByUser,
  updateAppointmentById,
  deleteAppointmentById,
} from '../controllers/appointment.js'

router.route('/').post(createAppointment)
router
  .route('/:id')
  .get(getAppointmentById)
  .patch(updateAppointmentById)
  .delete(deleteAppointmentById)
router.route('/user/:id').get(getAppointmentsByUser)

export default router
