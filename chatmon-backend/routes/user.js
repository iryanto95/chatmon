const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt    = require('jsonwebtoken')

require('dotenv').config()

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: String,
  password: String
})
const User = mongoose.model('User', userSchema)

router.post('/signup', async (req, res) => {
  const { email, password } = req.body

  const existing = await User.findOne({ email })

  if (existing) {
    return res.json({ error: 'User already exists' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = new User({ 
      email,
      password: hashedPassword
    })

    const newUser = await user.save()

    res.json(newUser)
  } catch (err) {
    console.info(err)
    res.status(500).json(err)
  }
})


router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.json({ error: 'Invalid credentials' })

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })
  if (process.env.ENVIRONMENT === 'production')
    res.cookie('chatmon_token', token, {  maxAge: 3*24*60*60*1000, sameSite: 'none', secure: true })
  else
    res.cookie('chatmon_token', token, {  maxAge: 3*24*60*60*1000 })

  res.json({ token })
})

router.post('/logout', (req, res) => {
  if (process.env.ENVIRONMENT === 'production')
    res.cookie('chatmon_token', '', {sameSite: 'none', secure: true})
  else
    res.cookie('chatmon_token', '')
  res.status(200).send('Logged out')
})

module.exports = router