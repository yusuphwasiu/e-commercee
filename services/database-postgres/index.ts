import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5432

app.use(express.json())

// PostgreSQL Database routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'PostgreSQL Database' })
})

app.get('/', (req, res) => {
  res.json({ 
    service: 'PostgreSQL Database',
    version: '2.0.0',
    description: 'PostgreSQL with migrations and ORM'
  })
})

// TODO: Add your routes here

app.listen(PORT, () => {
  console.log(`PostgreSQL Database running on port ${PORT}`)
})
