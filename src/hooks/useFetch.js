import { useEffect, useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useFetch = (path, dependencies = [], options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(API_BASE_URL + path, options);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setData(data);
                // console.log(API_BASE_URL + path, data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDataFromAPI();
    }, [path, ...dependencies]);

    return { data, loading, error };
};

export default useFetch;
