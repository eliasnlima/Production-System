import { useState, useEffect } from "react"
import { createProduction } from "../../services/api"

export default function ProductionForm({ products, materials, reload, editingProduction, onUpdate}) {

    const [productId, setProductId] = useState("")
    const [materialId, setMaterialId] = useState("")
    const [quantity, setQuantity] = useState("")

    useEffect(() => {

        if (editingProduction) {

            setProductId(editingProduction.product_id)
            setMaterialId(editingProduction.raw_material_id)
            setQuantity(editingProduction.quantity)

        }

    }, [editingProduction])

    async function handleSubmit(e) {

        e.preventDefault()

        const data = {

            product_id: Number(productId),
            raw_material_id: Number(materialId),
            quantity: Number(quantity)

        }

        if (editingProduction) {

            await onUpdate(editingProduction.id, data)

        }

        else {

            await createProduction(data)

            reload()
        }

        setProductId("")
        setMaterialId("")
        setQuantity("")
        
    }

    return (

        <form onSubmit={handleSubmit}>

            <h2>{editingProduction ? "Edit Production" : "Associate Material to Product"}</h2>

            <select value={productId} onChange={(e) => setProductId(e.target.value)}>

                <option value="">Select product</option>

                {products.map(p => (

                    <option key={p.id} value={p.id}>
                        {p.name}
                    </option>

                ))}

            </select>

            <select value={materialId} onChange={(e) => setMaterialId(e.target.value)}>

                <option value="">Select material</option>

                {materials.map(m => (

                    <option key={m.id} value={m.id}>
                        {m.name}
                    </option>

                ))}

            </select>

            <input
                placeholder="Quantity needed"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />

            <button>{editingProduction ? "Update" : "Create"}</button>

        </form>
    )
}