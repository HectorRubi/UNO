import express from 'express'
import { Request, Response, NextFunction } from 'express'

export const roomRouter = express.Router()

roomRouter
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({
        message: 'Room get router works',
      })
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
