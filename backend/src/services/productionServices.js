import { getProduction, regProduction } from "../repositories/productionRepository.js"
import { productSearchById } from "../repositories/productRepository.js"
import { materialSearchById } from "../repositories/rawMaterialsRepository.js"

export async function createProduction(production) {

    const { product_id, raw_material_id, quantity } = production

    if (!product_id || !raw_material_id || !quantity) {
        throw new Error("Required fields are blank!")
    }

    const productExist = await productSearchById(product_id)

    if (!productExist) {
        throw new Error("Product does not exist!")
    }

    const materialExist = await materialSearchById(raw_material_id)

    if (!materialExist) {
        throw new Error("Material does not exist!")
    }

    const newProduction = await regProduction(production)

    return newProduction
}

export async function getNewProduction() {
    
    const rows = await getProduction()

    const products = {}

    rows.forEach(product => { 
        if(!products[product.id]){
            products[product.id] = {
                id: product.id,
                name: product.name,
                possible: []
            }
        }

        const canProduce = Math.floor(product.stock_quantity / product.quantity)

        products[product.id].possible.push(canProduce)
    });

    const result = []

    for (const id in products) {

        const min =
            Math.min(...products[id].possible)

        result.push({
            id,
            product_name: products[id].name,
            can_produce: min
        })
    }

    return result
    
}
