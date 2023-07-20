import 'dotenv/config'
import express from 'express'

import { router } from './libs'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

// Set router module
router(app)

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}`)
})
