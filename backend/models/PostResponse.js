import mongoose from 'mongoose'

const { Schema, model } = mongoose

const PostResponseSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please provide user'],
      ref: 'User',
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please provide post'],
      ref: 'MedicinePost',
    },
    response: {
      type: String,
      required: [false, 'Please provide response'],
      trim: true,
    },
  },
  { timestamps: true }
)

export default model('PostResponse', PostResponseSchema)
