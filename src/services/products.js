import { API_BASE_URL } from '../constants/urls';

const handleResponse = async (response) => {
    // La api de fakestore no devuelve error si no existe el id
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return data;
};

export const getProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching products: ' + error.message);
        return null;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        return handleResponse(response);
    } catch (error) {
        console.error(`Error fetching product ${id}: ` + error.message);
        return null;
    }
};

export const getProductsByCategory = async (category) => {
    try {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
        return handleResponse(response);
    } catch (error) {
        console.error(`Error fetching products for category ${category}: ` + error.message);
        return null;
    }
};
