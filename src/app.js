// IMPORT MODULES
import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import {router} from './router'


// DATABASE & CONFIG ENV
import {dbConnect} from './database'
import config from './config'
dbConnect()

// MIDDLEWARE
app.use(bodyParser.json()) // Read JSON
app.use(bodyParser.urlencoded({extended: true})) // Read URLs


// ROUTE
app.use('/', router )


const port = config.port
const running = config.running
app.listen(port, () => console.log(`Server runing on ${port} ${running}`));