import pool from "../database/connection.js";

export async function regProduct(product) {
    try {
        const res = await pool.query(`INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *`, [product.name, product.price] )

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
        console.error(err);
        throw err;
    }
}