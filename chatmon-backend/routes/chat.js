const router = require('express').Router()
const { GoogleGenerativeAI } = require('@google/generative-ai')
require('dotenv').config()

const authenticateToken = require('../middleware/authenticateToken')
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
  time:     Number,
  email:    String,
  prompt:   String,
  response: String
})
const Chat = mongoose.model('Chat', chatSchema)

router.post('/retrieve', authenticateToken, async (req, res) => {
  const { email } = req.user

  if (!email)
    return res.status(400).json({ error: 'Email is required'})

  const chatHistory = await Chat.find({ email })
  res.json({ chatHistory })
})

router.post('/', authenticateToken, async (req, res) => {
  const { prompt } = req.body
  const { email  } = req.user

  if (!prompt)
    return res.status(400).json({ error: 'Prompt is required' })

  try {
    const time   = new Date().getTime()
    const result = await model.generateContent(prompt)

    const chat = new Chat({ 
      time,
      email,
      prompt,
      response: result.response.text() 
    })

    const newChat = await chat.save()

    res.json(newChat)
  } catch (err) {
    console.info(err)
    res.status(500).json(err)
  }
})

module.exports = router