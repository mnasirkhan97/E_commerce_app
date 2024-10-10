import PropTypes from "prop-types"; // Import PropTypes

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h3 className="font-bold">{item.title}</h3>
        <p>${item.price}</p>
      </div>
      <button
        onClick={removeFromCart}
        className="bg-red-500 text-white p-2 rounded"
      >
        Remove
      </button>
    </div>
  );
};

// Define PropTypes for validation
CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
