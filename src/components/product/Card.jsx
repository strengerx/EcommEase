import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { id, title, description, price, images } = product || {};

    return (
        <div className="bg-white shadow-md rounded p-4 flex flex-col lg:flex-row lg:flex-auto flex-shrink-0 gap-4">
            <img
                src={images?.[0]}
                alt={title}
                className="md:w-80 w-full h-56 object-cover rounded"
            />
            <div className="w-full flex flex-col justify-end gap-2">
                <Link to={`/shop/${id}`}>
                    <h3 className="text-lg text-blue-500 font-medium">
                        {title}
                    </h3>
                </Link>
                <p className="text-sm">{description}</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-2">
                    &#8377; {price}
                </h4>
            </div>
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default Card;
