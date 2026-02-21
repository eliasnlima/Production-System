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

    rows.forEach(row => {

        if (!products[row.id]) {

            products[row.id] = {

                id: row.id,

                name: row.name,

                price: Number(row.price),

                possible: []

            }
        }

        const canProduce =
            Math.floor(row.stock_quantity / row.quantity)

        products[row.id].possible.push(canProduce)

    })


    let result = []

    let totalProductionValue = 0

    for (const id in products) {

        const product = products[id]

        const min =
            Math.min(...product.possible)

        const totalValue =
            min * product.price


        totalProductionValue += totalValue


        result.push({

            id: Number(id),

            product_name: product.name,

            unit_price: product.price,

            can_produce: min,

            total_value: totalValue

        })
    }

    result = result.filter(product => product.can_produce > 0)

    result.sort((a, b) => b.unit_price - a.unit_price)

    return {

        produce: result,

        total_production_value: totalProductionValue

    }
}
