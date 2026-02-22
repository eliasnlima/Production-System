import { deleteProduction, showProduction, updateProduction } from "../repositories/productionRepository.js"
import { createProduction, getNewProduction } from "../services/productionServices.js"

class productionController {

    async regProduction(req, res) {
        try {

            const newProduction = await createProduction(req.body)

            return res.status(201).json({ newProduction })

        } catch (error) {

            console.error(error)

            return res.status(500).json({ error: "Error registering production!" })
        }
    }

    async canProduce(req, res) {
        try {
            const produce = await getNewProduction()

            return res.json({ produce })
        } catch (err) {
            console.error(err)

            return res.status(500).json(err)
        }
    }

    async updateProduction(req, res) {
        try {
            const { product_id, raw_material_id, quantity } = req.body
            const { id } = req.params

            if (!id || isNaN(id)) {
                return res.status(400).json({
                    error: "Invalid production ID."
                })
            }

            if (!product_id || !raw_material_id || quantity === undefined) {
                return res.status(400).json({
                    error: "product_id, raw_material_id and quantity are required."
                })
            }

            if (isNaN(product_id) || isNaN(raw_material_id) || isNaN(quantity) || quantity <= 0) {
                return res.status(400).json({
                    error: "Invalid numeric values. Quantity must be greater than 0."
                })
            }

            const production = {
                product_id,
                raw_material_id,
                quantity
            }

            const update = await updateProduction(id, production)

            if (!update) {
                return res.status(404).json({
                    error: "Production not found."
                })
            }

            return res.status(200).json({ message: "Production updated successfully!", update })
        } catch (err) {
            console.error(err)

            return res.status(500).json({ error: "Error updating production:", err })
        }


    }

    async deleteProduction(req, res) {
        try {
            const { id } = req.params

            if (!id || isNaN(id)) {
                return res.status(400).json({
                    error: "Invalid production ID."
                })
            }

            const newDelete = await deleteProduction(id)

            if (!newDelete) {
                return res.status(404).json({
                    error: "Production not found."
                })
            }

            return res.status(200).json({ message: "Production successfully deleted", newDelete })
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: "Error deleting production: ", err })
        }
    }

    async showAllProductions(req, res) {
        try {
            const productions = await showProduction()

            return res.json({ productions })
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: "Error show productions: ", err })
        }
    }



}

export default new productionController()