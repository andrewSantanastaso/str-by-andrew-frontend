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


export { addToCart, loadCart }