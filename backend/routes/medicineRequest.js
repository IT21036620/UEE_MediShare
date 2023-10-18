import express from 'express'
const router = express.Router()

import {
  createMedicineRequest,
  getAllMedicineRequests,
  getMedicineRequestById,
  getMedicineRequestByUser,
  updateMedicineRequestById,
  deleteMedicineRequestById,
} from '../controllers/medicineRequest.js'

import uploadMiddleware from '../middleware/cloudinary.js'

router
  .route('/')
  .get(getAllMedicineRequests)
  .post(uploadMiddleware.single('pres_image'), createMedicineRequest)
router
  .route('/:id')
  .get(getMedicineRequestById)
  .patch(uploadMiddleware.single('pres_image'), updateMedicineRequestById)
  .delete(deleteMedicineRequestById)
router.route('/user/:id').get(getMedicineRequestByUser)

export default router
