import 'dotenv/config'
import express from 'express'
import { Request, Response } from 'express'

import { router } from './libs'

import { errorHandler } from './middlewares/error.handler'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

// Set router module
router(app)

// Personal middlewares
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}`)
})
