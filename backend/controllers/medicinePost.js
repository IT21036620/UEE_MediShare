import MedicinePost from '../models/MedicinePost.js'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'
import cloudinary from '../config/cloudinary.js'

const createMedicinePost = asyncWrapper(async (req, res) => {
  const { user, medicineName, title, details } = req.body
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

    const medicinePost = new MedicinePost({
      user,
      medicineName,
      title,
      details,
      requestStatus,
      createdDate,
      createdTime,
      pres_image,
    })

    await medicinePost.save()
    res.status(201).json({ medicinePost })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
})

const getAllMedicinePosts = asyncWrapper(async (req, res) => {
  const medicinePost = await MedicinePost.find({}).populate('user')
  res.status(200).json({ medicinePost })
})

const getMedicinePostById = asyncWrapper(async (req, res, next) => {
  const { id: mpId } = req.params
  const medicinePost = await MedicinePost.find({
    _id: mpId,
  }).populate('user')

  if (!medicinePost) {
    return next(createCustomError(`No Medicine Post with id: ${mpId}`, 404))
  }
  res.status(200).json({ medicinePost })
})

const getMedicinePostByUser = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params
  const medicinePosts = await MedicinePost.find({
    user: userId,
  }).populate('user')

  if (!medicinePosts) {
    return next(createCustomError(`No User with id: ${userId}`, 404))
  }
  res.status(200).json({ medicinePosts })
})

const updateMedicinePostById = asyncWrapper(async (req, res) => {
  const { id: mpId } = req.params

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'spm',
    })
    req.body.pres_image = result.secure_url
  }
  const medicinePost = await MedicinePost.findByIdAndUpdate(
    { _id: mpId },
    req.body,
    {
      new: true,
    }
  )

  if (!medicinePost) {
    return next(createCustomError(`No Medicine Post with id: ${mrId}`, 404))
  }
  res.status(200).json({ medicinePost })
})

const deleteMedicinePostById = asyncWrapper(async (req, res) => {
  const { id: mpId } = req.params
  const medicinePost = await MedicinePost.findOneAndDelete({ _id: mpId })
  if (!medicinePost) {
    return next(
      createCustomError(`No Medicine Post with this id: ${mpId}`, 404)
    )
  }

  res.status(200).json({ medicinePost })
})

export {
  createMedicinePost,
  getAllMedicinePosts,
  getMedicinePostById,
  getMedicinePostByUser,
  updateMedicinePostById,
  deleteMedicinePostById,
}
