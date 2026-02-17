import { regProduct, showAllProducts, updateProduct } from "../repositories/productRepository.js"

class productController{
    
    async regProduct(req, res){
        try{
            const { name, price } = req.body

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

            const product = {
                name,
                price
            }

            const update = await updateProduct(id, product)

            return res.status(200).json({ message: "Product updated successfully!", update})
        } catch (err){
            console.error(err)

            return res.status(500).json({ error: "Error updating product:", err})
        }
        
        
    }
}


export default new productController()