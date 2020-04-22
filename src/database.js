import mongoose from 'mongoose'

import appConfig from './config'

export const dbConnect = (config = appConfig) => {
    return mongoose
        .connect(config.database, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('MongoDB is Ready'))
        .catch(error => console.log(`something went wrong ${error}`))
}