import { Link } from 'react-router-dom'

const Card = ({ product }) => {
    return (<div className="bg-white shadow-md rounded p-4 flex flex-auto gap-4">
        <img src={product?.images[0]} alt={product.title} className=" w-80 h-56 object-cover rounded" />
        <div className="flex flex-col justify-end">
            <Link to={`/products/${product.id}`}>
                <h3 className="text-lg text-blue-500 font-medium">{product?.title}</h3>
            </Link>
            <p className="text-sm">{product?.description}</p>
        </div>

    </div>)
}

export default Card