import mongoose from 'mongoose'

const { Schema, model } = mongoose

const MedicinePostSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Please provide user'],
    ref: 'User',
  },
  medicineName: {
    type: String,
    required: [false, 'Please provide medicine name'],
    trim: true,
  },
  title: {
    type: String,
    required: [false, 'Please provide title'],
    trim: true,
  },
  details: {
    type: String,
    required: [false, 'Please provide details'],
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

export default model('MedicinePost', MedicinePostSchema)
