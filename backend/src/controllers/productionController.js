import { deleteProduction, updateProduction } from "../repositories/productionRepository.js"
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

      async updateProduction(req, res){
            try {
                const {product_id, raw_material_id, quantity} = req.body
    
                const {id} = req.params
    
                const production = {
                    product_id,
                    raw_material_id,
                    quantity
                }
    
                const update = await updateProduction(id, production)
    
                return res.status(200).json({ message: "Production updated successfully!", update})
            } catch (err){
                console.error(err)
    
                return res.status(500).json({ error: "Error updating production:", err})
            }
            
            
        }

        async deleteProduction(req, res){
                try {
                    const {id} = req.params
        
                    const newDelete = await deleteProduction(id)
                        
                        return res.status(200).json({ message: "Production successfully deleted", newDelete})
                } catch (err){
                    console.error(err)
                    return res.status(500).json({error: "Error deleting production: ", err})
                }
            }
    
}

export default new productionController()