import { useState } from "react";
import CartSummary from "../components/Cart/CartSummary";
import FeatureCart from "../components/Cart/Feature-cart";

const CartPage = () => {
  // Centralized cart state here
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "../assets/images/cart-img/1.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "../assets/images/cart-img/2.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "../assets/images/cart-img/3.png",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Cart Items */}
      <FeatureCart cartItems={cartItems} setCartItems={setCartItems} />

      {/* Right: Summary */}
      <CartSummary cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
