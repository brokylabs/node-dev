import mongoose from 'mongoose'
import pick from 'lodash.pick'
import Joi from 'joi'

// Create schema (data modeling)
const schema = {
    title : {
        type: String,
        trim : true,
        required: true
    },
    description : {
        type: String,
        trim : true,
    },
    author : {
        type: String,
        required: [true, 'please enter authors']
    },
    image : String,
    draft : {
        type : Boolean,
        default : false,
    }
}


// Create the model
const shotsSchema = new mongoose.Schema(schema, {timestamps:true})


// Choose user data to send back to client
shotsSchema.methods.toJSON = function () {
    let userObject = this.toObject()
    return pick(userObject, [
        '_id', 
        'title', 
        'description', 
        'author', 
        'image', 
        'draft'
    ])
}

// Export Model
export const Shots = mongoose.model('shots', shotsSchema)

export function validateShots(data){
    const schema = Joi.object().keys({
        title : Joi.string()
            .required()
            .label('you must provide a title'),
        description : Joi.string(),
        author : Joi.required().label('you must sign in to post a shots')
    })
    return Joi.validate(data, schema)
}