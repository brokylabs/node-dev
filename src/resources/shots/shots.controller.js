// import User Model
import { Shots, validateShots } from './shots.model'
import pick from 'lodash.pick'




// Create Shots Controllr
const shotsController = {
    async createShots( req, res) {
        try {
            const { error } = validateShots(req.body)
            if(error){
                return res.status(400).send(error.details[0].context.label)
            }

            let shots = new Shots(pick(req.body, 
                [
                    'title', 
                    'description', 
                    'draft',
                    'image',
                    'author',
                    
                ]))
            await shots.save()
            res.status(200).send(shots)
            
            } catch (error) {
            res.status(400).send(error)
            }
    },
    async getShots(req, res){
        try {
            const result = await Shots.find().sort('createdAt')
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error)  
        }
    },
    async updateShots(req, res){
        try {
            // const { error } = validateShots(req.body)
            // if(error){
            //     return res.status(400).send(error.details[0].context.label)
            // }

            console.error(req.body)
            const shots = await Shots.findByIdAndUpdate(
                req.params.id, 
                req.body,
                { new: true}
                )
            res.status(200).send(shots)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async deleteShots(req, res){
        try {
            const shots = await Shots.deleteOne({ _id: req.params.id })
            res.status(200).send(shots)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async getShot(req, res){
        try {
            const shots = await Shots.findById(req.params.id)
            if(!shots){
                return res.status(404).send('Shots not found')
            }
            res.status(200).send(shots)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    // async getDashboard(req, res){
    //     try {
    //         //need Create auth
    //         // const shots = await User.findById(req.user._id)
    //         res.status(200).send('You must sign in first')

    //     } catch (error) {
    //         res.status(400).send(error)
    //     }
    // }
}

// Export Controller
export default shotsController
