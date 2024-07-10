import { useState, useMemo, useEffect, useRef } from "react";
import useMeta from "../hooks/useMeta";
import useFetch from "../hooks/useFetch";
import Sidebar from "../components/common/Sidebar";
import Card from "../components/product/Card";
import Loading from "../components/common/Loading";
import Pegination from "../components/common/Pegination";
import { useLocation, useParams } from "react-router-dom";
import SortByPrice from "../components/common/SortByPrice";

const Products = () => {

    const metadata = {
        title: "EcommEase - Explore Our Collection",
        description: "Browse our wide range of products for every need.",
    };

    useMeta(metadata);

    const currentLocation = useLocation();
    const queryParams = new URLSearchParams(currentLocation.search);
    const searchQuery = queryParams.get("query");

    const { categoryID } = useParams();
    const refElem = useRef();
    const [limit, setLimit] = useState(100);
    const [offset, setOffset] = useState(0);
    const [sortPrice, setSortPrice] = useState("default")
    const [productsPath, setProductsPath] = useState("/products");
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const query = useMemo(() => {
        const customParams = searchQuery ? { title: searchQuery } : { limit, offset };
        return new URLSearchParams(customParams).toString();
    }, [limit, offset, searchQuery]);

    useEffect(() => {
        setOffset(0);
        const calculateProductsPath = (categoryID) => {
            return categoryID ? `/categories/${categoryID}/products` : `/products`;
        };
        setProductsPath(calculateProductsPath(categoryID))
    }, [categoryID]);

    const { data: totalData } = useFetch(`${productsPath}`);
    const { data, loading, error } = useFetch(`${productsPath}?${query}`, [
        limit,
        offset,
        productsPath,
    ]);

    const sortData = (dataClone) => {
        if (!data) return [];
        const sortedData = [...dataClone];
        if (sortPrice === "toHigh") {
            return sortedData.sort((a, b) => a.price - b.price);
        } else if (sortPrice === "toLow") {
            return sortedData.sort((a, b) => b.price - a.price);
        }
        return sortedData;
    };

    const memoizedData = useMemo(() => sortData(data), [data, sortPrice, sortData]);

    const toggleFilter = () => {
        setIsFilterOpen((prevState) => !prevState);
    };

    return (
        <main className="w-full grid lg:grid-cols-1/4 gap-4 md:px-4 py-4">
            <Sidebar handleFilterOpen={toggleFilter} isFilterOpen={isFilterOpen} setLimit={setLimit} />

            <div
                id="products"
                ref={refElem}
                className="bg-slate-200 shadow-md p-4 grid gap-4 h-svh overflow-y-auto"
            >
                {loading && <Loading />}
                {error && (
                    <p className="text-lg text-center">
                        Error fetching products: {error.message}
                    </p>
                )}
                {!loading && !error && (
                    <>
                        <div className="flex justify-between items-end md:justify-end">
                            <p onClick={toggleFilter} className="text-gray-700 text-sm font-bold mb-2 md:hidden cursor-pointer">Filters</p>
                            <SortByPrice value={sortPrice} setFunction={setSortPrice} />
                        </div>
                        {memoizedData && memoizedData.length > 0 ? (
                            memoizedData.map((product, index) => (
                                <Card product={product} key={index} />
                            ))
                        ) : (
                            <p className="text-lg text-center">No products found.</p>
                        )}
                        {memoizedData && memoizedData.length > 0 && (
                            <Pegination
                                refElem={refElem.current}
                                limit={limit}
                                offset={offset}
                                setOffset={setOffset}
                                totalData={totalData}
                            />
                        )}
                    </>
                )}
            </div>
        </main>
    );
};

export default Products;
