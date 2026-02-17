import { regProduct } from "../repositories/productRepository.js"

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
}

export default new productController()