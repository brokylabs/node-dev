import express from 'express'
import userController from './user.controller'
export const userRoute = express.Router()

userRoute
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser)


userRoute.get('/:id', (req, res) => {
    res.send(`Users ID Is : ${req.params.id}`)
})

