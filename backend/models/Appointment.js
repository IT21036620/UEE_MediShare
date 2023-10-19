import mongoose from 'mongoose'

const { Schema, model } = mongoose

const AppointmentSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please provide user'],
      ref: 'User',
    },
    reason: {
      type: String,
      required: [false, 'Please provide reason'],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, 'must provide appointment date'],
    },
    doctorName: {
      type: String,
      required: [true, 'Please provide doctor Name'],
      trim: true,
    },
    doctorType: {
      type: String,
      required: [true, 'Please provide doctor type'],
      trim: true,
    },
    time: {
      type: String,
      required: [true, 'Please provide appointment time'],
    },
    alarmStatus: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

export default model('Appointment', AppointmentSchema)
