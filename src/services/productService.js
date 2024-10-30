import { getToken } from "/src/services/authService";
const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

const loadProducts = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}/products`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        })
        const json = await res.json()


        if (json.err) {
            throw new Error(json.err);
        }
        return json


    } catch (error) {
        console.status(401).json({ error: error.message })
    }
}

const addProduct = async (formData) => {
    try {
        const res = await fetch(`${BACKEND_URL}/new-product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`

            },
            body: JSON.stringify(formData)

        })
        return res.json()

    } catch (error) {
        console.log(error)
    }
    loadProducts()
}

const showProduct = async (productId) => {

    try {
        const res = await fetch(`${BACKEND_URL}/${productId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }

        })
        const json = await res.json()
        return json


    } catch (error) {
        console.log(error)
    }
}

const editProduct = async (productId, product) => {
    try {
        const res = await fetch(`${BACKEND_URL}/edit/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(product)
        })
        const json = await res.json()
        return json
    } catch (error) {
        console.error({ error: error.message })

    }
}


const deleteProduct = async (productId) => {
    try {
        const res = await fetch(`${BACKEND_URL}/delete/${productId}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await res.json()
        return json
    } catch (error) {
        console.log({ error: error.message })
    }
}

export { loadProducts, addProduct, showProduct, editProduct, deleteProduct }