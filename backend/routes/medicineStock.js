import express from 'express'
const router = express.Router()

import {
  createMedicineStock,
  getMedicineStockById,
  getMedicineStocksByUser,
  getMedicineStocksToExpireByUser,
  updateMedicineStockById,
  deleteMedicineStockById,
} from '../controllers/medicineStock.js'

router.route('/').post(createMedicineStock)
router
  .route('/:id')
  .get(getMedicineStockById)
  .patch(updateMedicineStockById)
  .delete(deleteMedicineStockById)
router.route('/user/:id').get(getMedicineStocksByUser)
router.route('/user/exp/:id').get(getMedicineStocksToExpireByUser)

export default router
