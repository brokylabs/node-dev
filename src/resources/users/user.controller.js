// import User Model
import {User} from './user.model'
import pick from 'lodash.pick'


// Create User Controllr
const userController = {
    async createUser( req, res) {
        try {
            let user = new User(pick(req.body, ['email', 'password']))
            await user.save()
            res.status(200).send(user)
            
            } catch (error) {
            res.status(400).send(error)
            }
    },
    async getUsers(req, res){
        try {
            const result = await User.find().sort('createdAt')
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error)  
        }
    },
    async updateUsers(req, res){
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true}, false)
            res.status(200).send(user)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async deleteUsers(req, res){
        try {
            const user = await User.deleteOne({ _id: req.params })
            res.status(200).send(user)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}

// Export Controller
export default userController
