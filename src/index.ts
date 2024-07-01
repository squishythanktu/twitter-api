import { config } from 'dotenv'
import express from 'express'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import mediasRouter from './routes/medias.routes'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import staticRouter from './routes/static.routes'
import { initFolder } from './utils/file'
config()

databaseService.connect()
const app = express()
const port = process.env.PORT || 4000

// Create upload folder if it doesn't exist
initFolder()

// Create upload folder if it doesn't exist
initFolder()

app.use(express.json())
app.use('/users', usersRouter)
app.use('/medias', mediasRouter)
app.use('/static', staticRouter)

// Default error handler
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
