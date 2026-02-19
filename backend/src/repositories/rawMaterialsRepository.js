import pool from "../database/connection.js";

export async function regMaterial(material) {
    try {
        const res = await pool.query(`INSERT INTO raw_materials (name, stock_quantity) VALUES ($1, $2) RETURNING *`, [material.name, material.stock_quantity] )

        return res.rows[0]
    } catch (err){
        console.error(err)
        throw err
    }    
}

export async function showAllMaterials() {
    try {
        const res = await pool.query(`SELECT * FROM raw_materials ORDER BY stock_quantity DESC`);

        return res.rows;

    } catch (err) {
        console.error(err)
        throw err
    }
}

export async function updateMaterial(id, material) {
    try {

        const res = await pool.query(`UPDATE raw_materials SET name = $1, stock_quantity = $2 WHERE id = $3 RETURNING *`, [material.name, material.stock_quantity, id])

        return res.rows[0]

    } catch (err) {
        console.error(err)
        throw err
    }
}

export async function deleteMaterial(id) {
    try {
        const res = await pool.query(`DELETE FROM raw_materials WHERE id=$1`, [id])

        return res.rowCount
    } catch(err){
        console.error(err)
        throw err
    }
    
}