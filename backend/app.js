import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import xss from 'xss-clean'
// import rateLimiter from 'express-rate-limit'

import connectDB from './db/connect.js'

import userRouter from './routes/user.js'
import medicineRequestRouter from './routes/medicineRequest.js'
import medicinePostRouter from './routes/medicinePost.js'
import medicationRouter from './routes/medication.js'
import appointmentRouter from './routes/appointment.js'
import prescriptionReminderRouter from './routes/prescriptionReminders.js'
import medicineStockRouter from './routes/medicineStock.js'
import postResponseRouter from './routes/postResponse.js'

import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

const app = express()

dotenv.config()

// Set up middleware and routes
app.set('trust proxy', 1)
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // limit each IP to 100 requests per windowMs
//   })
// )
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use('/uploads', express.static('uploads'))

// Define your routes
app.use('/api/v1/user', userRouter)
app.use('/api/v1/request', medicineRequestRouter)
app.use('/api/v1/post', medicinePostRouter)
app.use('/api/v1/history', medicationRouter)
app.use('/api/v1/appointment', appointmentRouter)
app.use('/api/v1/reminder', prescriptionReminderRouter)
app.use('/api/v1/stock', medicineStockRouter)
app.use('/api/v1/post-res', postResponseRouter)

// Error handling middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 4000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
