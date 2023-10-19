import Medication from '../models/Medication.js'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'

const createMedication = asyncWrapper(async (req, res) => {
  req.body.mediStatus = 'Ongoing'
  const medication = await Medication.create(req.body)
  res.status(201).json({ medication })
})

const getMedicationById = asyncWrapper(async (req, res, next) => {
  const { id: mId } = req.params
  const medication = await Medication.find({
    _id: mId,
  }).populate('user')

  if (!medication) {
    return next(createCustomError(`No Medication with id: ${mId}`, 404))
  }
  res.status(200).json({ medication })
})

const getMedicationByUser = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params
  const medication = await Medication.find({
    user: userId,
  }).populate('user')

  if (!medication) {
    return next(createCustomError(`No User with id: ${userId}`, 404))
  }
  res.status(200).json({ medication })
})

const updateMedicationById = asyncWrapper(async (req, res) => {
  const { id: mId } = req.params
  const medication = await Medication.findByIdAndUpdate(
    { _id: mId },
    req.body,
    {
      new: true,
    }
  )

  if (!medication) {
    return next(createCustomError(`No Medication with id: ${mId}`, 404))
  }
  res.status(200).json({ medication })
})

const deleteMedicationById = asyncWrapper(async (req, res) => {
  const { id: mId } = req.params
  const medication = await Medication.findOneAndDelete({ _id: mId })
  if (!medication) {
    return next(createCustomError(`No Medication with this id: ${mId}`, 404))
  }

  res.status(200).json({ medication })
})

const deletePrescriptionById = asyncWrapper(async (req, res, next) => {
  const { id: pId } = req.params

  try {
    const prescription = await Medication.findOneAndUpdate(
      { 'prescriptions._id': pId },
      { $pull: { prescriptions: { _id: pId } } },
      { new: true }
    )

    if (!prescription) {
      return next(
        createCustomError(`No Prescription with this id: ${pId}`, 404)
      )
    }

    res.status(200).json({ prescription })
  } catch (error) {
    return next(createCustomError('Could not delete the prescription.', 500))
  }
})

export {
  createMedication,
  getMedicationById,
  getMedicationByUser,
  updateMedicationById,
  deleteMedicationById,
  deletePrescriptionById,
}
