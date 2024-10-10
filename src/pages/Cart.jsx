import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      {state.cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: item })
          }
        />
      ))}
    </div>
  );
};

export default Cart;
