import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
    rejectUnauthorized: false
  }
})

pool.on('connect', (client) => {
  client.query('SET search_path TO public');
});

pool.connect()
    .then(() => {
        console.log("Database connected!")
    })
    .catch((err) => {
        console.error(err)
    })


export default pool;