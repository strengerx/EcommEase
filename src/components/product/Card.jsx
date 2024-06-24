import { Link } from 'react-router-dom'

const Card = ({ product }) => {
    return (<div className="bg-white shadow-md rounded p-4 flex flex-col lg:flex-row lg:flex-auto flex-shrink-0 gap-4">
        <img src={product?.images[0]} alt={product?.title} className=" w-80 h-56 object-cover rounded" />
        <div className="w-full flex flex-col justify-end gap-2">
            <Link to={`/products/${product?.id}`}>
                <h3 className="text-lg text-blue-500 font-medium">{product?.title}</h3>
            </Link>
            <p className="text-sm">{product?.description}</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-2">&#8377; {product?.price}</h4>
        </div>
    </div>)
}

export default Card