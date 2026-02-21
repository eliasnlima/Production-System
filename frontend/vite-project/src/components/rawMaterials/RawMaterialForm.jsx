import { useState, useEffect } from "react"
import { createRawMaterial } from "../../services/api"

export default function RawMaterialForm({ reload, editingMaterial, onUpdate }) {

    const [name, setName] = useState("")
    const [stock, setStock] = useState("")

    useEffect(() => {

        if (editingMaterial) {

            setName(editingMaterial.name)
            setStock(editingMaterial.stock_quantity)

        }

    }, [editingMaterial])

    async function handleSubmit(e) {

        e.preventDefault()

        const data = {
            name,
            stock_quantity: Number(stock)
        }

        if (editingMaterial) {

            await onUpdate(editingMaterial.id, data)

        }

        else {

            await createRawMaterial(data)

            reload()
        }

        setName("")
        setStock("")

       
    }

    return (

        <form onSubmit={handleSubmit}>

            <h2>{editingMaterial ? "Edit Raw Material" : "Create Raw Material"}</h2>

            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />

            <button>{editingMaterial ? "Update" : "Create"}</button>

        </form>
    )
}