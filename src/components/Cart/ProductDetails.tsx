import { useState } from "react";

const ProductDetails = () => {
  // For demo, static data (later you can fetch or pass props)
  const [product] = useState({
    id: 1,
    name: "Black Hoodie",
    description: "A warm, comfortable black hoodie made from cotton blend.",
    price: 49.99,
    image: "https://via.placeholder.com/200",
  });

  const handleAddToCart = () => {
    // Here you will dispatch redux action or manage state
    console.log("Added to cart:", product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6 bg-white shadow rounded-md">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full lg:w-1/3 rounded-md object-cover"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-4">${product.price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
