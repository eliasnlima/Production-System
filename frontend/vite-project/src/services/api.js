const API_URL = "http://localhost:3030"



export async function getProducts() {

    const res = await fetch(`${API_URL}/products`)

    return await res.json()
}

export async function createProduct(data) {

    const res = await fetch(`${API_URL}/products`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    })

    return await res.json()
}

export async function updateProduct(id, data) {

    const res = await fetch(`${API_URL}/products/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    })

    return await res.json()
}

export async function deleteProduct(id) {

    const res = await fetch(`${API_URL}/products/${id}`, {

        method: "DELETE"
    })

    return await res.json()
}

export async function getRawMaterials() {

    const res = await fetch(`${API_URL}/materials`)

    return await res.json()
}

export async function createRawMaterial(data) {

    const res = await fetch(`${API_URL}/materials`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    })

    return await res.json()
}

export async function updateRawMaterial(id, data) {

    const res = await fetch(`${API_URL}/materials/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    })

    return await res.json()
}


export async function deleteRawMaterial(id) {

    const res = await fetch(`${API_URL}/materials/${id}`, {

        method: "DELETE"
    })

    return await res.json()
}


export async function getProductions() {

    const res = await fetch(`${API_URL}/productions/all`)

    return await res.json()
}

export async function createProduction(data) {

    const res = await fetch(`${API_URL}/productions`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    })

    return await res.json()
}



export async function getCapacity() {

    const res = await fetch(`${API_URL}/productions`)

    return await res.json()
}

export async function updateProduction(id, data) {

    const res = await fetch(`${API_URL}/production/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    })

    return await res.json()
}


export async function deleteProduction(id) {

    const res = await fetch(`${API_URL}/production/${id}`, {

        method: "DELETE"
    })

    return await res.json()
}