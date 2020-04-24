import mongoose from 'mongoose'

// Create schema (data modeling)
const schema = {
    email : {
        type: String,
        require : [true, 'Please enter your email'],
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type: String,
        require : [true, 'Please enter your password'],
        trim : true,
        minlength : 6

    },
    usetname : {
        type: String,
        trim: true
    },
    photoURL : String,
    bio : String,
    url : String,
    isAdmin : Boolean
}


// Create the model
const userSchema = new mongoose.Schema(schema, {timestamps:true})


// Export Model
export const User = mongoose.model('user', userSchema)