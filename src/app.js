// IMPORT EXPRESS
import express from 'express'
const app = express()

// DATABASE
import {dbConnect} from './database'
// CONFIG ENV
import config from './config'

dbConnect()


app.get('/', (req, res) => res.send("it Work bro!!!"))

const port = config.port
const running = config.running
app.listen(port, () => console.log(`Server runing on ${port} ${running}`));