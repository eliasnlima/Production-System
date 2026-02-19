import { regProduction } from "../repositories/productionRepository.js"
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

