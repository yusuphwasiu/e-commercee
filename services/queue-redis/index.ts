import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3008

app.use(express.json())

// Job Queue (Redis) routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Job Queue (Redis)' })
})

app.get('/', (req, res) => {
  res.json({ 
    service: 'Job Queue (Redis)',
    version: '1.4.0',
    description: 'Background job processing with Redis'
  })
})

// TODO: Add your routes here

app.listen(PORT, () => {
  console.log(`Job Queue (Redis) running on port ${PORT}`)
})
