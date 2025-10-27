import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3003

app.use(express.json())

// Notifications routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Notifications' })
})

app.get('/', (req, res) => {
  res.json({ 
    service: 'Notifications',
    version: '0.9.1',
    description: 'Email, SMS, and push notifications'
  })
})

// TODO: Add your routes here

app.listen(PORT, () => {
  console.log(`Notifications running on port ${PORT}`)
})
