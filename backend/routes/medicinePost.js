import express from 'express'
const router = express.Router()

import {
  createMedicinePost,
  getAllMedicinePosts,
  getMedicinePostById,
  getMedicinePostByUser,
  updateMedicinePostById,
  deleteMedicinePostById,
} from '../controllers/medicinePost.js'

import uploadMiddleware from '../middleware/cloudinary.js'

router
  .route('/')
  .get(getAllMedicinePosts)
  .post(uploadMiddleware.single('pres_image'), createMedicinePost)
router
  .route('/:id')
  .get(getMedicinePostById)
  .patch(uploadMiddleware.single('pres_image'), updateMedicinePostById)
  .delete(deleteMedicinePostById)
router.route('/user/:id').get(getMedicinePostByUser)

export default router
