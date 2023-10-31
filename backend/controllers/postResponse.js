import PostResponse from '../models/PostResponse.js'
import asyncWrapper from '../middleware/async.js'
import { createCustomError } from '../errors/custom-error.js'

const createPostResponse = asyncWrapper(async (req, res) => {
  const response = await PostResponse.create(req.body)
  res.status(201).json({ response })
})

const getPostResponseById = asyncWrapper(async (req, res, next) => {
  const { id: rId } = req.params
  const response = await PostResponse.find({
    _id: rId,
  })
    .populate('user')
    .populate('post')

  if (!response) {
    return next(createCustomError(`No Post Response with id: ${rId}`, 404))
  }
  res.status(200).json({ response })
})

const getPostResponseByPost = asyncWrapper(async (req, res, next) => {
  const { id: postId } = req.params
  const response = await PostResponse.find({
    post: postId,
  })
    .populate('user')
    .populate('post')

  if (!response) {
    return next(createCustomError(`No Post with id: ${postId}`, 404))
  }
  res.status(200).json({ response })
})

const getPostResponseByUser = asyncWrapper(async (req, res, next) => {
  const { id: userId } = req.params
  const response = await PostResponse.find({
    user: userId,
  })
    .populate('user')
    .populate('post')

  if (!response) {
    return next(createCustomError(`No User with id: ${userId}`, 404))
  }
  res.status(200).json({ response })
})

const updatePostResponseById = asyncWrapper(async (req, res) => {
  const { id: rId } = req.params
  const response = await PostResponse.findByIdAndUpdate(
    { _id: rId },
    req.body,
    {
      new: true,
    }
  )

  if (!response) {
    return next(createCustomError(`No Post Response with id: ${rId}`, 404))
  }
  res.status(200).json({ response })
})

const deletePostResponseById = asyncWrapper(async (req, res) => {
  const { id: rId } = req.params
  const response = await PostResponse.findOneAndDelete({ _id: rId })
  if (!response) {
    return next(createCustomError(`No Post Response with this id: ${rId}`, 404))
  }

  res.status(200).json({ response })
})

export {
  createPostResponse,
  getPostResponseById,
  getPostResponseByUser,
  getPostResponseByPost,
  updatePostResponseById,
  deletePostResponseById,
}
