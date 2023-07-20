import { Request, Response, NextFunction } from 'express'
import { Boom } from '@hapi/boom'

export function errorHandler(err: Error, req: Request, res: Response) {
  res.status(500).json({
    code: 500,
    message: err.message,
  })
}

export function boomErrorHandler(
  err: Boom,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.isBoom) {
    res.status(err.output.statusCode).json(err.output.payload)
  } else {
    next(err)
  }
}
