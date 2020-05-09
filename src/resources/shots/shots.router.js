import express from 'express'
import shotsController from './shots.controller'
export const shotsRoute = express.Router()
import { sanitizeBody } from 'express-validator'


// Home route
shotsRoute
    .route('/')
    .get(shotsController.getShots)
    .post(
        [
            sanitizeBody('title')
                .trim()
                .escape(),
            sanitizeBody('description')
                .trim()
                .escape(),
        ],
        shotsController.createShots)
    // .put
    // .delete

// Home route with ID
shotsRoute
    .route('/:id')
    .get(shotsController.getShot)
    // .post
    .put(
        
        [
            //  title, description, url etc ..
            sanitizeBody('title').trim().escape(),
            sanitizeBody('description').escape().trim()
        ], 
       

    shotsController.updateShots)
    .delete(shotsController.deleteShots)