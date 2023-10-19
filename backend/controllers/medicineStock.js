import MedicineStock from '../models/MedicineStock.js'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'

const createMedicineStock = asyncWrapper(async (req, res) => {
  const stock = await MedicineStock.create(req.body)
  res.status(201).json({ stock })
})

const getMedicineStockById = asyncWrapper(async (req, res, next) => {
  const { id: sId } = req.params
  const stock = await MedicineStock.find({
    _id: sId,
  }).populate('user')

  if (!stock) {
    return next(createCustomError(`No Medicine Stock with id: ${sId}`, 404))
  }
  res.status(200).json({ stock })
})

const getMedicineStocksByUser = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params
  const stock = await MedicineStock.find({
    user: userId,
  }).populate('user')

  if (!stock) {
    return next(
      createCustomError(`No Medicine Stock with user id: ${userId}`, 404)
    )
  }
  res.status(200).json({ stock })
})

// get medicine stock which expires within a week
const getMedicineStocksToExpireByUser = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params
  const sevenDaysFromNow = new Date()
  sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)

  try {
    const stock = await MedicineStock.find({
      user: userId,
      exp: { $gte: new Date(), $lte: sevenDaysFromNow },
    })
      .populate('user')
      .sort({ exp: 1 })

    if (stock.length === 0) {
      // Check if stock is an empty array
      return next(
        createCustomError(`No Medicine Stock with user id: ${userId}`, 404)
      )
    }
    res.status(200).json({ stock })
  } catch (err) {
    // Handle any errors that may occur during the query
    return next(createCustomError('Error while fetching medicine stocks', 500))
  }
})

const updateMedicineStockById = asyncWrapper(async (req, res) => {
  const { id: sId } = req.params
  const stock = await MedicineStock.findByIdAndUpdate({ _id: sId }, req.body, {
    new: true,
  })

  if (!stock) {
    return next(createCustomError(`No Medicine Stock with id: ${sId}`, 404))
  }
  res.status(200).json({ stock })
})

const deleteMedicineStockById = asyncWrapper(async (req, res) => {
  const { id: sId } = req.params
  const stock = await MedicineStock.findOneAndDelete({ _id: sId })
  if (!stock) {
    return next(
      createCustomError(`No Medicine Stock with this id: ${sId}`, 404)
    )
  }

  res.status(200).json({ stock })
})

export {
  createMedicineStock,
  getMedicineStockById,
  getMedicineStocksByUser,
  getMedicineStocksToExpireByUser,
  updateMedicineStockById,
  deleteMedicineStockById,
}
