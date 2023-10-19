import mongoose from 'mongoose'

const { Schema, model } = mongoose

const PrescriptionReminderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please provide user'],
      ref: 'User',
    },
    medicationName: {
      type: String,
      required: [false, 'Please provide medication name'],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, 'must provide appointment date'],
    },
    dose: {
      type: String,
      required: [true, 'Please provide dose'],
      trim: true,
    },
    amount: {
      type: String,
      required: [true, 'Please provide amount'],
      trim: true,
    },
    duration: {
      type: String,
      required: [true, 'Please provide duration'],
      trim: true,
    },
    frequency: {
      type: String,
      required: [true, 'Please provide frequency'],
      trim: true,
    },
    timeSlots: [
      {
        time: {
          type: String,
          required: [true, 'Please provide appointment time'],
        },
        alarmStatus: {
          type: Boolean,
          default: true,
        },
      },
    ],
  },
  { timestamps: true }
)

export default model('PrescriptionReminder', PrescriptionReminderSchema)
