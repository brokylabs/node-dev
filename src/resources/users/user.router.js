import express from 'express'
import userController from './user.controller'
export const userRoute = express.Router()


// Home route
userRoute
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser)

// Home route with parse ID
userRoute
    .route('/:id')
    .put(userController.updateUsers)
    .delete(userController.deleteUsers)

