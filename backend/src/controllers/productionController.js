import { createProduction, getNewProduction } from "../services/productionServices.js"

class productionController{
    
    async regProduction(req, res){
        try{

            const newProduction = await createProduction(req.body)

            return res.status(201).json({newProduction})

        } catch (error){

            console.error(error)

            return res.status(500).json({error: "Error registering production!"})
        }
    }

    async canProduce(req,res){
        try{
            const produce = await getNewProduction()

            return res.json({produce})
        }catch (err){
            console.error(err)

            return res.status(500).json(err)
        }
    }
}

export default new productionController()