import pool from "../database/connection.js";

export async function regProduction(production) {
    try {
        const res = await pool.query(`INSERT INTO production (product_id, raw_material_id, quantity) VALUES ($1, $2, $3) RETURNING *`, [production.product_id, production.raw_material_id, production.quantity] )

        return res.rows[0]
    } catch (err){
        console.error(err)
        throw err
    }    
}

export async function showAllProducts() {
    try {
        const res = await pool.query(`SELECT * FROM products ORDER BY price DESC`);

        return res.rows;

    } catch (err) {
        console.error(err)
        throw err
    }
}

export async function updateProduct(id, product) {
    try {

        const res = await pool.query(`UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *`, [product.name, product.price, id])

        return res.rows[0]

    } catch (err) {
        console.error(err)
        throw err
    }
}

export async function deleteProduct(id) {
    try {
        const res = await pool.query(`DELETE FROM products WHERE id=$1`, [id])

        return res.rowCount
    } catch(err){
        console.error(err)
        throw err
    }
    
}

export async function getProduction() {
    try {
        const res = await pool.query(`
            SELECT p.id, p.name, p.price, rm.name as name_material, rm.stock_quantity, pr.quantity
            FROM products as p 
            join production as pr ON p.id = pr.product_id
            join raw_materials as rm on pr.raw_material_id = rm.id
            order by p.price DESC`)

        return res.rows
    } catch (err){
        console.error(err)
        throw err
    }    
}