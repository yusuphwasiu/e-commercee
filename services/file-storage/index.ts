import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3004

app.use(express.json())

// File Storage (S3) routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'File Storage (S3)' })
})

app.get('/', (req, res) => {
  res.json({ 
    service: 'File Storage (S3)',
    version: '1.1.0',
    description: 'S3-compatible file upload and management'
  })
})

// TODO: Add your routes here

app.listen(PORT, () => {
  console.log(`File Storage (S3) running on port ${PORT}`)
})
