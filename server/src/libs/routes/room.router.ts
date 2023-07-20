import express from 'express'

export const roomRouter = express.Router()

roomRouter
  .route('/')
  .get(async (req, res) => {
    res.send('Room get router works')
  })
  .post(async (req, res) => {
    res.send('Room post router works')
  })
