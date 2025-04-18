import { useState, useMemo, useRef } from "react";
import useMeta from "../hooks/useMeta";
import useFetch from "../hooks/useFetch";
import Sidebar from "../components/common/Sidebar";
import Card from "../components/product/Card";
import Loading from "../components/common/Loading";
import Pegination from "../components/common/Pegination";
import SortByPrice from "../components/common/SortByPrice";
import sortProducts from "../utilities/sortProducts";
import useProductQuery from "../hooks/useProductQuery";

export default function Products() {

    const metadata = {
        title: "EcommEase - Explore Our Collection",
        description: "Browse our wide range of products for every need.",
    };

    useMeta(metadata);

    const refElem = useRef();
    const [limit, setLimit] = useState(100);
    const [offset, setOffset] = useState(0);
    const [sortPrice, setSortPrice] = useState("default")
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const { productsPath, query } = useProductQuery(limit, offset)

    const { data: totalData } = useFetch(`${productsPath}`);
    const { data, loading, error } = useFetch(`${productsPath}?${query}`, [limit, offset, productsPath,]);

    const memoizedData = useMemo(() => sortProducts(data, sortPrice), [data, sortPrice, sortProducts]);

    const toggleFilter = () => {
        setIsFilterOpen((prevState) => !prevState);
    };

    return (
        <main className="w-full grid lg:grid-cols-1/4 gap-4 md:px-4 py-4">
            <Sidebar
                handleFilterOpen={toggleFilter}
                isFilterOpen={isFilterOpen}
                setLimit={setLimit}
            />

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
                {!loading && !error && memoizedData && (
                    <>
                        {memoizedData.length > 0 && (
                            <div className="flex justify-between items-end md:justify-end">
                                <button
                                    onClick={toggleFilter}
                                    className="text-gray-700 text-sm bg-white px-4 py-1 border border-slate-400 md:hidden cursor-pointer"
                                >
                                    Filters
                                </button>
                                <SortByPrice value={sortPrice} setFunction={setSortPrice} />
                            </div>
                        )}

                        {memoizedData.length > 0 ? (
                            memoizedData.map((product) => (
                                <Card product={product} key={product.id} />
                            ))
                        ) : (
                            <p className="text-lg text-center">No products found.</p>
                        )}

                        {memoizedData.length > 0 && (
                            <Pegination
                                refElem={refElem}
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
}
