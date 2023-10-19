import { StatusCodes } from 'http-status-codes'
import CustomAPIForError from './custom-api.js'

class BadRequestError extends CustomAPIForError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default BadRequestError
