import { useState, useEffect } from "react"
import { createProduct } from "../../services/api"

export default function ProductForm({ reload, editingProduct, onUpdate }) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {

        if (editingProduct) {

            setName(editingProduct.name)
            setPrice(editingProduct.price)

        }

    }, [editingProduct])

    async function handleSubmit(e) {

        e.preventDefault()

        const data = {
            name,
            price: Number(price)
        }


        if (editingProduct) {

            await onUpdate(editingProduct.id, data)

        }

        else {

            await createProduct(data)

            reload()
        }

        setName("")
        setPrice("")

       
    }

    return (

        <form onSubmit={handleSubmit}>

            <h2>{editingProduct ? "Edit Product" : "Create Product"}</h2>
            

            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button type="submit">
                {editingProduct ? "Update" : "Create"}
            </button>

        </form>

    )
}