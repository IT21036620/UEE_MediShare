import mongoose from 'mongoose'

const { Schema, model } = mongoose

const MedicineStockSchema = new Schema(
  {
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
    dose: {
      type: String,
      required: [true, 'Please provide medicine dose'],
      trim: true,
    },
    amount: {
      type: String,
      required: [true, 'Please provide medicine amount'],
      trim: true,
    },
    exp: {
      type: Date,
      required: [true, 'must provide medicine expiry date'],
    },
  },
  { timestamps: true }
)

export default model('MedicineStock', MedicineStockSchema)
