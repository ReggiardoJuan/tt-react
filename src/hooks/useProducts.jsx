import { useEffect, useState } from 'react';

export function useProducts(fetchProducts) {
    const [availableProducts, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchProducts()
            .then((data) => {
                setProducts([].concat(data));
            })
            .catch((error) => {
                setError(error);
                console.error('Error en useProducts:', error);
            })
            .finally(() => setLoading(false));
    }, [fetchProducts]);

    return { availableProducts, loading, error };
}
