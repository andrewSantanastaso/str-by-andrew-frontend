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


export { loadProducts }