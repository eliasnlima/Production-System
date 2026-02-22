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

        if (!name.trim()) {
            alert("Name is required!")
            return
        }

        if (stock === "" || isNaN(stock) || Number(stock) < 0) {
            alert("Stock must be a valid number greater or equal to 0!")
            return
        }

        const data = {
            name,
            stock_quantity: Number(stock)
        }

        try {
            if (editingMaterial) {
                await onUpdate(editingMaterial.id, data)
            }

            else {
                await createRawMaterial(data)
                reload()
            }

            setName("")
            setStock("")
        } catch (err) {
            alert(err.message || "Something went wrong.")
        }



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