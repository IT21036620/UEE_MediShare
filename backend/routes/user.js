import express from 'express'
const router = express.Router()

import {
  login,
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/User.js'

// middleware for routes
// const authenticateSeller = require('../middleware/authentication')
// const upload = require('../middleware/upload')

import uploadMiddleware from '../middleware/cloudinary.js'

router
  .route('/')
  .get(getAllUsers)
  .post(uploadMiddleware.single('profile_image'), createUser)
router
  .route('/:id')
  .get(getUserById)
  .patch(uploadMiddleware.single('profile_image'), updateUserById)
  .delete(deleteUserById)
router.route('/login').post(login)

export default router
