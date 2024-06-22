const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const getdata = async () => {
    return `${API_BASE_URL}/products`
}

export default { getdata }