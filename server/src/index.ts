import express from 'express'
import { Request, Response } from 'express'

import { config } from './config'
import { router } from './routes'

import { errorHandler, boomErrorHandler } from './middlewares/error.handler'

const app = express()
const port = config.port

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

// Set router module
router(app)

// Personal middlewares
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}`)
})
