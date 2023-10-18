import mongoose from 'mongoose'

const { Schema, model } = mongoose

const MedicationSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please provide user'],
      ref: 'User',
    },
    reason: {
      type: String,
      required: [true, 'Please provide reason'],
      trim: true,
    },
    startDate: {
      type: String,
      trim: true,
      required: [true, 'must provide start date'],
    },
    doctorName: {
      type: String,
      required: [true, 'Please provide doctor name'],
      trim: true,
    },
    doctorType: {
      type: String,
      required: [false, 'Please provide details'],
      trim: true,
    },
    mediStatus: {
      type: String,
      required: [false, 'Please provide status'],
    },
    endDate: {
      type: String,
      trim: true,
      required: [false, 'must provide created time'],
    },
    prescriptions: [
      {
        medicine: {
          type: String,
          trim: true,
          required: [true, 'must provide medicine name'],
        },
        dose: {
          type: String,
          trim: true,
          required: [true, 'must provide medicine dose'],
        },
        quantity: {
          type: String,
          trim: true,
          required: [true, 'must provide medicine dosage quantity'],
        },
        frequency: {
          type: String,
          trim: true,
          required: [true, 'must provide medicine frequency'],
        },
        interval: {
          type: String,
          trim: true,
          required: [true, 'must provide medicine frequency interval'],
        },
        duration: {
          type: String,
          trim: true,
          required: [true, 'must provide medicine duration'],
        },
      },
    ],
    notes: {
      type: String,
      trim: true,
      required: [false, 'must provide notes and effects'],
    },
  },
  { timestamps: true }
)

export default model('Medication', MedicationSchema)
