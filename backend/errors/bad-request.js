import { StatusCodes } from 'http-status-codes'
import CustomAPIForError from './custom-api'

class BadRequestError extends CustomAPIForError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default BadRequestError
