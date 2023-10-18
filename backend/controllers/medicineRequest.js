import MedicineRequest from '../models/MedicineRequest.js'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'
import cloudinary from '../config/cloudinary.js'

const createMedicineRequest = asyncWrapper(async (req, res) => {
  const { user, medicineName } = req.body
  const file = req.file

  try {
    let pres_image

    if (file) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'uee',
      })
      pres_image = result.secure_url
    }

    const requestStatus = 'Active'
    const currentDateAndTime = new Date()
    const createdDate = currentDateAndTime.toISOString().split('T')[0]
    const createdTime = currentDateAndTime
      .toISOString()
      .split('T')[1]
      .split('.')[0]

    const medicineRequest = new MedicineRequest({
      user,
      medicineName,
      requestStatus,
      createdDate,
      createdTime,
      pres_image,
    })

    await medicineRequest.save()
    res.status(201).json({ medicineRequest })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
})

const getAllMedicineRequests = asyncWrapper(async (req, res) => {
  const medicineRequest = await MedicineRequest.find({}).populate('user')
  res.status(200).json({ medicineRequest })
})

const getMedicineRequestById = asyncWrapper(async (req, res, next) => {
  const { id: mrId } = req.params
  const medicineRequest = await MedicineRequest.find({
    _id: mrId,
  }).populate('user')

  if (!medicineRequest) {
    return next(createCustomError(`No Medicine Request with id: ${mrId}`, 404))
  }
  res.status(200).json({ medicineRequest })
})

const getMedicineRequestByUser = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params
  const medicineRequests = await MedicineRequest.find({
    user: userId,
  }).populate('user')

  if (!medicineRequests) {
    return next(createCustomError(`No User with id: ${userId}`, 404))
  }
  res.status(200).json({ medicineRequests })
})

const updateMedicineRequestById = asyncWrapper(async (req, res) => {
  const { id: mrId } = req.params

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'spm',
    })
    req.body.pres_image = result.secure_url
  }
  const medicineRequest = await MedicineRequest.findByIdAndUpdate(
    { _id: mrId },
    req.body,
    {
      new: true,
    }
  )

  if (!medicineRequest) {
    return next(createCustomError(`No item with id: ${mrId}`, 404))
  }
  res.status(200).json({ medicineRequest })
})

const deleteMedicineRequestById = asyncWrapper(async (req, res) => {
  const { id: mrId } = req.params
  const medicineRequest = await MedicineRequest.findOneAndDelete({ _id: mrId })
  if (!medicineRequest) {
    return next(
      createCustomError(`No Medicine Request with this id: ${mrId}`, 404)
    )
  }

  res.status(200).json({ medicineRequest })
})

export {
  createMedicineRequest,
  getAllMedicineRequests,
  getMedicineRequestById,
  getMedicineRequestByUser,
  updateMedicineRequestById,
  deleteMedicineRequestById,
}
