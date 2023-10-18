import mongoose from 'mongoose'

const { Schema, model } = mongoose

const MedicineRequestSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Please provide user'],
    ref: 'User',
  },
  medicineName: {
    type: String,
    required: [true, 'Please provide medicine name'],
    trim: true,
  },
  requestStatus: {
    type: String,
    required: [false, 'Please provide status'],
  },
  createdDate: {
    type: String,
    trim: true,
    required: [false, 'must provide created date'],
  },
  createdTime: {
    type: String,
    trim: true,
    required: [false, 'must provide created time'],
  },
  pres_image: {
    type: String,
  },
})

export default model('MedicineRequest', MedicineRequestSchema)
