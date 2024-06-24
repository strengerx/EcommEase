import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Loading from "../common/Loading"
import { useState } from "react"
import useMeta from "../../hooks/useMeta"

const SingleProduct = () => {

    const { productID } = useParams()
    const { data, error, loading } = useFetch(`/products/${productID}`)
    const [activeImage, setActiveImage] = useState(0)

    const metadata = {
        title: data?.title ? data.title : "EcommEase - Product Not Found",
        description: data?.description ? `Buy ${data?.title} at EcommEase. ${data.description}. Shop now and enjoy great deals!` : "The product you are looking for is not available. Check out our other great products at EcommEase.",
    }

    useMeta(metadata);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <p className="text-lg text-center">{error}</p>
    }

    return (<main className='bg-slate-200 shadow-md p-4 grid gap-4 m-4'>
        {data ?
            <div className="rounded-lg grid gap-10 md:grid-cols-1/2">
                {data?.images && data.images.length > 0 ?
                    <div className="carousel">
                        {data.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${data.title} image ${index + 1}`}
                                className={`w-full h-auto object-cover rounded-lg mb-4 ${activeImage !== index && "hidden"}`}
                            />
                        ))}
                        <div className="flex justify-center mt-4 gap-4">
                            {data.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${data.title} image ${index + 1}`}
                                    className={`w-10 h-10 object-cover rounded-lg cursor-pointer`}
                                    onClick={() => setActiveImage(index)}
                                />
                            ))}
                        </div>
                    </div> : <p>no iamge found</p>}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{data?.title}</h1>
                        <p className="text-gray-700 mt-4">{data?.description}</p>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-semibold text-gray-800">&#8377; {data?.price}</span>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
            : <p className="text-lg text-center">No products found.</p>}
    </main>)
}

export default SingleProduct