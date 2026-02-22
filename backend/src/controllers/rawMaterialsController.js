import { deleteMaterial, regMaterial, showAllMaterials, updateMaterial } from "../repositories/rawMaterialsRepository.js"

class rawMaterialsController {

    async regMaterial(req, res) {
        try {
            const { name, stock_quantity } = req.body

            if (!name || stock_quantity === undefined) {
                return res.status(400).json({
                    error: "Name and stock_quantity are required."
                })
            }

            if (isNaN(stock_quantity) || stock_quantity < 0) {
                return res.status(400).json({
                    error: "stock_quantity must be a valid number greater or equal to 0."
                })
            }

            const material = {
                name,
                stock_quantity
            }

            const newMaterial = await regMaterial(material)

            return res.status(201).json({ newMaterial })

        } catch (error) {

            console.error(error)

            return res.status(500).json({ error: "Error registering material!" })
        }
    }

    async showAllMaterials(req, res) {
        try {

            const materials = await showAllMaterials()

            return res.status(200).json({ materials })

        } catch (error) {

            console.error(error)

            return res.status(500).json({ error: "Error fetching materials :", err })
        }
    }

    async updateMaterial(req, res) {
        try {
            const { name, stock_quantity } = req.body
            const { id } = req.params

            if (!id || isNaN(id)) {
                return res.status(400).json({
                    error: "Invalid material ID."
                })
            }

            if (!name || stock_quantity === undefined) {
                return res.status(400).json({
                    error: "Name and stock_quantity are required."
                })
            }

            if (isNaN(stock_quantity) || stock_quantity < 0) {
                return res.status(400).json({
                    error: "stock_quantity must be a valid number greater or equal to 0."
                })
            }

            const material = {
                name,
                stock_quantity
            }

            const update = await updateMaterial(id, material)

            if (!update) {
                return res.status(404).json({
                    error: "Material not found."
                })
            }

            return res.status(200).json({ message: "Material updated successfully!", update })
        } catch (err) {
            console.error(err)

            return res.status(500).json({ error: "Error updating material:", err })
        }


    }

    async deleteMaterial(req, res) {
        try {
            const { id } = req.params

            if (!id || isNaN(id)) {
                return res.status(400).json({
                    error: "Invalid material ID."
                })
            }

            const newDelete = await deleteMaterial(id)

            if (!newDelete) {
                return res.status(404).json({
                    error: "Material not found."
                })
            }

            return res.status(200).json({ message: "Material successfully deleted", newDelete })
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: "Error deleting material: ", err })
        }
    }
}


export default new rawMaterialsController()