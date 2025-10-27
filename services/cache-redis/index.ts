import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3010

app.use(express.json())

// Caching (Redis) routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Caching (Redis)' })
})

app.get('/', (req, res) => {
  res.json({ 
    service: 'Caching (Redis)',
    version: '1.2.0',
    description: 'Redis caching layer'
  })
})

// TODO: Add your routes here

app.listen(PORT, () => {
  console.log(`Caching (Redis) running on port ${PORT}`)
})
