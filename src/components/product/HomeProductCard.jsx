import { Link } from "react-router-dom"

export default function HomeProductCard({ product }) {
    return (<div
        className="bg-slate-200 rounded-lg shadow-lg"
    >
        <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
            <h3 className="text-lg text-blue-500 font-medium">
                <Link to={`/shop/${product.id}`}>
                    {product.title}
                </Link>
            </h3>
            <p className="text-slate-800 text-lg mt-1">
                &#8377; {product.price}
            </p>
        </div>
    </div>)
}
