import { StatusCodes } from 'http-status-codes'
import CustomAPIForError from './custom-api'

class NotFoundError extends CustomAPIForError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

export default NotFoundError
