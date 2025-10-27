import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3002

app.use(express.json())

// Payments (Stripe) routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Payments (Stripe)' })
})

app.get('/', (req, res) => {
  res.json({ 
    service: 'Payments (Stripe)',
    version: '1.2.0',
    description: 'Stripe payment processing with webhooks'
  })
})

// TODO: Add your routes here

app.listen(PORT, () => {
  console.log(`Payments (Stripe) running on port ${PORT}`)
})
