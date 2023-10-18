import { StatusCodes } from 'http-status-codes'
import CustomAPIForError from './custom-api'

class UnauthenticatedError extends CustomAPIForError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

export default UnauthenticatedError
