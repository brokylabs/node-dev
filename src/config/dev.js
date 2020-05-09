const devConfig = {
    port : process.env.PORT || 3333,
    database : 'mongodb://localhost/development',
    secrets : {
        API_KEY: process.env.API_KEY
    },
    running : 'Development'
}

export default devConfig