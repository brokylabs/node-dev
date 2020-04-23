import express from 'express'
export const userRoute = express.Router()


userRoute.get('/', (req, res) => {
    res.send('Users pages')
})

userRoute.get('/:slug', (req, res) => {
    res.send(`Users ID Is : ${req.params.slug}`)
})

