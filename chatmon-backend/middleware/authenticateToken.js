const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const token = req?.cookies?.chatmon_token || req.header('Authorization')?.split(' ')[1]

  if (!token)
    return res.status(401).json({ message: 'No token provided' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded // Add user info to the request object
    next()
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' })
  }
}

module.exports = authenticateToken