import { Schema, model } from 'mongoose'
import { genSalt, hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide first name'],
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide last name'],
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  phone: {
    type: Number,
    required: [false, 'Please provide contact number'],
    min: [
      9,
      'phone number should contain at least 9 digits, {VALUE} is invalid',
    ],
  },
  birthDate: {
    type: Date,
    trim: true,
    required: [true, 'must provide dob'],
  },
  profile_image: {
    type: String,
  },
})

UserSchema.pre('save', async function () {
  const salt = await genSalt(10)
  this.password = await hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await compare(candidatePassword, this.password)
  return isMatch
}

export default model('User', UserSchema)
