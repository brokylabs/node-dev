import mongoose from 'mongoose'
import pick from 'lodash.pick'
import bcrypt  from 'bcryptjs'
import Joi from 'joi'

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
    username : {
        type: String,
        trim: true,
        unique: true
    },
    photoURL : String,
    bio : String,
    url : String,
    isAdmin : Boolean
}


// Create the model
const userSchema = new mongoose.Schema(schema, {timestamps:true})

// Hansh password before save to the database
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    }else{
        next()
    }
})

// Choose user data to send back to client
userSchema.methods.toJSON = function () {
    let userObject = this.toObject()
    return pick(userObject, [
        '_id', 
        'email', 
        'username', 
        'photoURL', 
        'bio', 
        'url'
    ])
}

// Export Model
export const User = mongoose.model('user', userSchema)

export function validateUser(data){
    const schema = Joi.object().keys({
        email : Joi.string().required().email().label('"not a valid email'),
        password : Joi.string().required().min(6).label('password is too short')
    })
    return Joi.validate(data, schema)
}