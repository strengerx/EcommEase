import { useState, useMemo } from "react"
import useMeta from "../hooks/useMeta"
import useFetch from "../hooks/useFetch"
import Sidebar from "../components/common/Sidebar"
import Card from "../components/product/Card"
import Loading from "../components/common/Loading"
import Pegination from "../components/common/Pegination"

const Products = () => {

    const metadata = {
        title: "EcommEase - Explore Our Collection",
        description: "Browse our wide range of products for every need."
    }

    useMeta(metadata)

    const [limit, setLimit] = useState(3)
    const [offset, setOffset] = useState(0)

    const { data, loading } = useFetch(`/products?offset=${offset}&limit=${limit}`, [limit, offset])
    const { data: totalData } = useFetch(`/products`)
    const memoizedData = useMemo(() => data, [data]);

    return (<main className="w-full grid grid-cols-1/4 gap-4 p-4">
        <Sidebar setLimit={setLimit} />

        <div id="products" className="bg-slate-200 shadow-md p-4 grid gap-4 h-svh overflow-y-auto">
            {loading && <Loading />}
            {memoizedData && memoizedData.length > 0 ? memoizedData.map((product, index) => (
                <Card product={product} key={index} />
            )) :
                <p className="text-lg text-center">No products found.</p>
            }
            {memoizedData && memoizedData.length > 0 &&
                <Pegination
                    limit={limit}
                    offset={offset}
                    setOffset={setOffset}
                    totalData={totalData} />}
        </div>

    </main>)
}

export default Products