import express from 'express'
const router = express.Router()

import {
  createMedication,
  getMedicationById,
  getMedicationByUser,
  updateMedicationById,
  deleteMedicationById,
  deletePrescriptionById,
} from '../controllers/medication.js'

router.route('/').post(createMedication)
router
  .route('/:id')
  .get(getMedicationById)
  .patch(updateMedicationById)
  .delete(deleteMedicationById)
router.route('/user/:id').get(getMedicationByUser)
router.route('/prescription/:id').delete(deletePrescriptionById)

export default router
