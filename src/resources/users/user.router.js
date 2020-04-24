import express from 'express'
import userController from './user.controller'
export const userRoute = express.Router()

// Home route
userRoute
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser)
    // .put
    // .delete

// Home route with parse ID
userRoute
    .route('/:id')
    // .get
    // .post
    .put(userController.updateUsers)
    .delete(userController.deleteUsers)

