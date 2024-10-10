import { createContext, useReducer } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const CartContext = createContext();

const initialState = { cart: [] };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// PropTypes validation
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
