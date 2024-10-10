import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <h2 className="mt-2 text-2xl font-bold">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
      <p className="text-gray-500">Category: {product.category}</p>
    </div>
  );
};

export default ProductDetails;
