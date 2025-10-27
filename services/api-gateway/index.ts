import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// API Gateway routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'API Gateway' })
})

app.get('/', (req, res) => {
  res.json({ 
    service: 'API Gateway',
    version: '1.5.0',
    description: 'Request routing, rate limiting, and auth'
  })
})

// TODO: Add your routes here

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`)
})
