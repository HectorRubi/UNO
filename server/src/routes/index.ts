import express from 'express'
import { Express } from 'express'

import { roomRouter } from './room.router'

export function router(app: Express) {
  const router = express.Router()
  router.use('/room', roomRouter)

  app.use('/api', router)
}
