import express from 'express'
export const router = express.Router()
import {userRoute} from './resources/users/user.router'

router.get('/', (req, res) => res.send('Home page from route.js'))
router.get('/about', (req, res) => res.send('About page'))


router.get('/signin', (req, res) => res.send('Signin page'))
router.post('/signup', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    const user = { email, password}
    res.send(user)
})

// USER ROUTE
router.use('/users', userRoute)
