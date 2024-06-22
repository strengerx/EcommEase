import { useState, useMemo } from "react"
import useMeta from "../hooks/useMeta"
import useFetch from "../hooks/useFetch"
import Sidebar from "../components/common/Sidebar"
import Card from "../components/product/Card"

const Products = () => {

    const metadata = {
        title: "EcommEase - Explore Our Collection",
        description: "Browse our wide range of products for every need."
    }

    useMeta(metadata)

    const [limit, setLimit] = useState(10)

    const { data, loading } = useFetch(`/products?offset=10&limit=${limit}`, [limit])
    const memoizedData = useMemo(() => data, [data]);

    return (<main className="w-full grid grid-cols-1/4 gap-4 p-4">
        <Sidebar />
        <div id="products" className="bg-slate-200 shadow-md px-4 pt-4 pb-8 mb-4 grid gap-4 h-svh overflow-y-auto">
            {loading && <h3 className="text-2xl text-blue-500 font-medium">Loading...</h3>}
            {memoizedData && memoizedData.map((product, index) => (
                <Card product={product} key={index} />
            ))}
        </div>
    </main>)
}

export default Products