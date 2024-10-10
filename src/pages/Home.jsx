import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) navigate("/login");

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [navigate]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
