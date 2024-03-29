import express from 'express'
import { Request, Response, NextFunction } from 'express'

import { createRoom } from './../use-cases/createRoom'

const roomRouter = express.Router()
roomRouter
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await createRoom()
      res.json(data)
    } catch (error) {
      next(error)
    }
  })
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({
        message: 'Room post router works',
      })
    } catch (error) {
      next(error)
    }
  })

export { roomRouter }
