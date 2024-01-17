import express from 'express'
import userRouter from './user.routes'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.use('/user', userRouter)
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
