import { useMemo, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function useProductQuery(limit, offset) {
    const location = useLocation();
    const { categoryID } = useParams();
    const searchQuery = new URLSearchParams(location.search).get("query");

    const [productsPath, setProductsPath] = useState("/products");

    useEffect(() => {
        setProductsPath(categoryID ? `/categories/${categoryID}/products` : `/products`);
    }, [categoryID]);

    const query = useMemo(() => {
        const customParams = searchQuery ? { title: searchQuery } : { limit, offset };
        return new URLSearchParams(customParams).toString();
    }, [limit, offset, searchQuery]);

    return { productsPath, query };
}
