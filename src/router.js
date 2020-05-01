import express from 'express'
export const router = express.Router()
import {userRoute} from './resources/users/user.router'
import userController from './resources/users/user.controller'

router.get('/', (req, res) => res.send('Home page from route.js'))
router.get('/about', (req, res) => res.send('About page'))


router.get('/signin', (req, res) => res.send('Signin page'))
router.post('/signup', userController.createUser)

// USER ROUTE
router.use('/users', userRoute)
