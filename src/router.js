import express from 'express'
export const router = express.Router()
import {userRoute} from './resources/users/user.router'
import { shotsRoute } from './resources/shots/shots.router'
import userController from './resources/users/user.controller'
import {  sanitizeBody } from 'express-validator/filter'


router.get('/', (req, res) => res.send('Home page from route.js'))
router.get('/about', (req, res) => res.send('About page'))


router.get('/signin', (req, res) => res.send('Signin page'))
router.post('/signup', 
[
    sanitizeBody('email')
        .trim()
        .escape()
],
// [
//     // must be an email
//     check('email').trim().escape(),
// ], 

// (req, res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(422).json({ errors: errors.array})
//     }
// },

    userController.createUser)

// USER ROUTE
router.use('/users', userRoute)
router.use('/shots', shotsRoute)
