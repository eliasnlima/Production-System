import { deleteMaterial, regMaterial, showAllMaterials, updateMaterial } from "../repositories/rawMaterialsRepository.js"

class rawMaterialsController{
    
    async regMaterial(req, res){
        try{
            const { name, stock_quantity } = req.body

            if (!name || !stock_quantity){
            return res.status(400).json({ error: "Name and Stock Quantity need to be filled in!"})
            }

            const material = {
                name,
                stock_quantity
            }

            const newMaterial = await regMaterial(material)

            return res.status(201).json({newMaterial})

        } catch (error){

            console.error(error)

            return res.status(500).json({error: "Error registering material!"})
        }
    }

    async showAllMaterials(req, res){
        try{    
            
            const materials = await showAllMaterials()

            return res.status(200).json({materials})

        } catch (error){

            console.error(error)

            return res.status(500).json({error: "Error fetching materials :", err})
        }
    }

    async updateMaterial(req, res){
        try {
            const {name, stock_quantity} = req.body

            const {id} = req.params

            const material = {
                name,
                stock_quantity
            }

            const update = await updateMaterial(id, material)

            return res.status(200).json({ message: "Material updated successfully!", update})
        } catch (err){
            console.error(err)

            return res.status(500).json({ error: "Error updating material:", err})
        }
        
        
    }

    async deleteMaterial(req, res){
        try {
            const {id} = req.params

            const newDelete = await deleteMaterial(id)
                
                return res.status(200).json({ message: "Material successfully deleted", newDelete})
        } catch (err){
            console.error(err)
            return res.status(500).json({error: "Error deleting material: ", err})
        }
    }
}


export default new rawMaterialsController()