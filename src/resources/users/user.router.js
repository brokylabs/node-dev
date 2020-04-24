import express from 'express'
import userController from './user.controller'
export const userRoute = express.Router()

userRoute
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser)


userRoute
    .route('/:id')
    .put(userController.updateUsers)


