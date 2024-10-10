import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white mt-2 p-2 rounded"
      >
        Buy Now
      </button>
      <Link to={`/product/${product.id}`} className="text-blue-600 mt-2 block">
        View Details
      </Link>
    </div>
  );
};

// Define PropTypes for validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
