import express from 'express'
import userController from './user.controller'
export const userRoute = express.Router()
import { sanitizeBody } from 'express-validator'


// Home route
userRoute
    .route('/')
    .get(userController.getUsers)
    // .post(userController.createUser)
    // .put
    // .delete

// Home route with ID
userRoute
    .route('/:id')
    .get(userController.getProfile)
    // .post
    .put(
        
        [
            //  email, username, url etc ..
            sanitizeBody('email').trim().escape(),
            sanitizeBody('username').escape().trim(),
            sanitizeBody('url').escape().trim(),
            sanitizeBody('bio').escape().trim(),
        ], 
       

    userController.updateUsers)
    .delete(userController.deleteUsers)