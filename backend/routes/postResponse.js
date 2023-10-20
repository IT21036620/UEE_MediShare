import express from 'express'
const router = express.Router()

import {
  createPostResponse,
  getPostResponseById,
  getPostResponseByPost,
  getPostResponseByUser,
  updatePostResponseById,
  deletePostResponseById,
} from '../controllers/postResponse.js'

router.route('/').post(createPostResponse)
router
  .route('/:id')
  .get(getPostResponseById)
  .patch(updatePostResponseById)
  .delete(deletePostResponseById)
router.route('/user/:id').get(getPostResponseByUser)
router.route('/post/:id').get(getPostResponseByPost)

export default router
