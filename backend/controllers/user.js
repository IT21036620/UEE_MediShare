import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'
import cloudinary from '../config/cloudinary.js'
import { StatusCodes } from 'http-status-codes'
import BadRequestError from '../errors/bad-request.js'
import UnauthenticatedError from '../errors/unauthenticated.js'

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid email')
  }

  // compare password
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid password')
  }

  const token = user.createJWT()
  res.status(StatusCodes.OK).json({
    user,
    token,
  })
}

const createUser = asyncWrapper(async (req, res) => {
  const { firstName, lastName, email, password, phone, birthDate } = req.body
  const file = req.file

  let profile_image

  if (file) {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'uee',
      })
      profile_image = result.secure_url
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error)
      profile_image =
        'https://res.cloudinary.com/dbcmklrpv/image/upload/v1684347067/default_uz60rr.jpg'
    }
  } else {
    //set a default image URL
    profile_image =
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1684347067/default_uz60rr.jpg'
  }

  try {
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      birthDate,
      profile_image,
    })

    await user.save()
    const token = user.createJWT()
    res.status(201).json({ user, token })
  } catch (error) {
    console.error('Error saving user:', error)
    res.status(500).send('Server error')
  }
})

const getAllUsers = asyncWrapper(async (req, res) => {
  const users = await User.find({})
  res.status(200).json({ users })
})

const getUserById = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params
  const user = await User.find({ _id: userId })

  if (!user) {
    return next(createCustomError(`No User with id: ${userId}`, 404))
  }
  res.status(200).json({ user })
})

const updateUserById = asyncWrapper(async (req, res) => {
  const { id: userId } = req.params

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'spm',
    })
    req.body.profile_image = result.secure_url
  }
  const user = await User.findByIdAndUpdate({ _id: userId }, req.body, {
    new: true,
  })

  const token = user.createJWT()
  if (!user) {
    return next(createCustomError(`No item with id: ${userId}`, 404))
  }
  res.status(200).json({ user, token })
})

const deleteUserById = asyncWrapper(async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOneAndDelete({ _id: userId })
  if (!user) {
    return next(createCustomError(`No User with this id: ${userId}`, 404))
  }

  res.status(200).json({ user })
})

export {
  login,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
}
