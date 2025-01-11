const express  = require('express')
const cors     = require('cors')
const bcrypt   = require('bcrypt')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err))

const app  = express()

app.use(cookieParser())

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  }))
app.use(express.json())

app.use('/user', require('./routes/user'))
app.use('/chat', require('./routes/chat'))

app.listen(process.env.PORT, () => {
  console.log(`API server running on http://localhost:${process.env.PORT}`)
})