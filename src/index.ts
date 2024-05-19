import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import mediasRouter from './routes/medias.routes'
import { initFolder } from './utils/file'

databaseService.connect()
const app = express()
const port = 3000

// Create upload folder if it doesn't exist
initFolder()

app.use(express.json())
app.use('/users', usersRouter)
app.use('/medias', mediasRouter)

// Default error handler
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
