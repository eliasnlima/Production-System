import { useEffect, useState } from "react"

import {
    getProducts,
    getRawMaterials,
    getCapacity,
    getProductions,
    updateProduct,
    deleteProduct,

    updateRawMaterial,
    deleteRawMaterial,

    updateProduction,
    deleteProduction
} from "../services/api"

import ProductForm from "../components/products/ProductForm"
import ProductList from "../components/products/ProductList"

import RawMaterialForm from "../components/rawMaterials/RawMaterialForm"
import RawMaterialList from "../components/rawMaterials/RawMaterialList"

import ProductionForm from "../components/production/ProductionForm"
import ProductionCapacity from "../components/production/ProductionCapacity"
import ProductionList from "../components/production/ProductionList"

export default function Home() {

    const [products, setProducts] = useState([])
    const [materials, setMaterials] = useState([])
    const [capacity, setCapacity] = useState([])
    const [productions, setProductions] = useState([])

    const [editingProduct, setEditingProduct] = useState(null)
    const [editingMaterial, setEditingMaterial] = useState(null)
    const [editingProduction, setEditingProduction] = useState(null)

    function handleEditProduct(product) {

    setEditingProduct(product)

    }

    async function handleUpdateProduct(id, data) {

    await updateProduct(id, data)

    setEditingProduct(null)

    loadAll()
    }

    async function handleDeleteProduct(id) {

    const confirmDelete = confirm("Deseja excluir este produto?")

    if (!confirmDelete) return

    await deleteProduct(id)

    loadAll()
    }

    function handleEditMaterial(material) {

    setEditingMaterial(material)

    }


    async function handleUpdateMaterial(id, data) {

    await updateRawMaterial(id, data)

    setEditingMaterial(null)

    loadAll()
    }


    async function handleDeleteMaterial(id) {

    const confirmDelete = confirm("Delete raw material?")

    if (!confirmDelete) return

    await deleteRawMaterial(id)

    loadAll()
    }

    function handleEditProduction(production) {

    setEditingProduction(production)

    }


    async function handleUpdateProduction(id, data) {

    await updateProduction(id, data)

    setEditingProduction(null)

    loadAll()
    }


    async function handleDeleteProduction(id) {

    const confirmDelete = confirm("Delete production?")

    if (!confirmDelete) return

    await deleteProduction(id)

    loadAll()
    }

    async function loadAll() {

        const p = await getProducts()
        const m = await getRawMaterials()
        const prod = await getProductions()
        const c = await getCapacity()

        setProducts(p.products)
        setMaterials(m.materials)
        setProductions(prod.productions)
        setCapacity(c.produce)
    }

    useEffect(() => {

        loadAll()

    }, [])

    return (

        <div className="container">

    <h1>Production System</h1>

    <div className="grid">

        <div className="card">
            <ProductForm reload={loadAll} editingProduct={editingProduct} onUpdate={handleUpdateProduct}/>
            <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct}/>
        </div>

        <div className="card">
            <RawMaterialForm reload={loadAll} editingMaterial={editingMaterial} onUpdate={handleUpdateMaterial} />
            <RawMaterialList materials={materials} onEdit={handleEditMaterial} onDelete={handleDeleteMaterial} />
        </div>

        <div className="card">
            <ProductionForm products={products} materials={materials} reload={loadAll} editingProduction={editingProduction} onUpdate={handleUpdateProduction} />
            <ProductionList production={productions} onEdit={handleEditProduction} onDelete={handleDeleteProduction} />
        </div>

        <div className="card">
            <ProductionCapacity capacity={capacity} />
        </div>

    </div>

</div>

    )
}