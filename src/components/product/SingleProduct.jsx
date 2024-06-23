import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Loading from "../common/Loading"

const SingleProduct = () => {

    const { productID } = useParams()

    const { data, error, loading } = useFetch(`/products/${productID}`)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <p className="text-lg text-center">{error}</p>
    }

    return (<main className='bg-slate-200 shadow-md p-4 grid gap-4 h-svh m-4'>
        {data ?
            <div className="rounded-lg p-6 grid gap-4 md:grid-cols-2">
                <img
                    src={data?.images && data.images[0]}
                    alt={data?.title}
                    className="w-full h-auto object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{data?.title}</h1>
                        <p className="text-gray-700 mt-4">{data?.description}</p>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-semibold text-gray-800">${data?.price}</span>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div> : <p className="text-lg text-center">No products found.</p>}
    </main>)
}

export default SingleProduct