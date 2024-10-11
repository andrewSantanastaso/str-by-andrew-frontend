const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

const addToCart = async (userId, productId) => {
    try {
        const res = await fetch(`${BACKEND_URL}/cart/${userId}/${productId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },


        })
        const json = await res.json()
        return json

    } catch (error) {
        console.log(error)

    }
}

const loadCart = async (userId) => {
    try {
        const res = await fetch(`${BACKEND_URL}/cart/${userId}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },


        })

        const json = await res.json()
        return json
    } catch (error) {
        console.log(error)
    }
}

const removeFromCart = async (userId, productId) => {
    try {
        const res = await fetch(`${BACKEND_URL}/cart/${userId}/${productId}/delete`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }

        })

        const json = await res.json()
        return json
    } catch (error) {
        console.log(error)
    }
}

const purchaseCart = async (productId, product) => {
    try {

        const res = await fetch(`${BACKEND_URL}/cart/stock/${productId}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        const json = await res.json()
        return json

    } catch (error) {
        console.log(error)
    }
}


export { addToCart, loadCart, removeFromCart }