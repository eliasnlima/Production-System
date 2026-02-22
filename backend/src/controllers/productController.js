import { deleteProduct, regProduct, showAllProducts, updateProduct } from "../repositories/productRepository.js"

class productController{
    
    async regProduct(req, res){
        try{
            const { name, price } = req.body

                if (!name || price === undefined) {
                    return res.status(400).json({ 
                        error: "Name and price are required." 
                    })
                }

                if (typeof price !== "number" || price <= 0) {
                    return res.status(400).json({
                        error: "Price must be a valid number greater than 0."
                    })
                }

            const product = {
                name,
                price
            }

            const newProduct = await regProduct(product)

            return res.status(201).json({newProduct})

        } catch (error){

            console.error(error)

            return res.status(500).json({error: "Error registering product!"})
        }
    }

    async showAllProducts(req, res){
        try{    
            
            const products = await showAllProducts()

            return res.status(200).json({products})

        } catch (error){

            console.error(error)

            return res.status(500).json({error: "Error fetching products:", err})
        }
    }

    async updateProduct(req, res){
        try {
            const {name, price} = req.body
            const {id} = req.params

                if (!id || isNaN(id)) {
                    return res.status(400).json({ 
                        error: "Invalid product ID." 
                    })
                }

                if (!name || price === undefined) {
                    return res.status(400).json({ 
                        error: "Name and price are required for update." 
                    })
                }

            const product = {
                name,
                price
            }

            const update = await updateProduct(id, product)

                if (!update) {
                    return res.status(404).json({ 
                        error: "Product not found." 
                    })
                }

            return res.status(200).json({ message: "Product updated successfully!", update})
        } catch (err){
            console.error(err)

            return res.status(500).json({ error: "Error updating product:", err})
        }
        
        
    }

    async deleteProduct(req, res){
        try {
            const {id} = req.params

                if (!id || isNaN(id)) {
                return res.status(400).json({ 
                    error: "Invalid product ID." 
                })
                }

            const newDelete = await deleteProduct(id)

                if (!newDelete) {
                return res.status(404).json({ 
                    error: "Product not found." 
                })
                }
                
                return res.status(200).json({ message: "Product successfully deleted", newDelete})
        } catch (err){
            console.error(err)
            return res.status(500).json({error: "Error deleting product: ", err})
        }
    }
}


export default new productController()