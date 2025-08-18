type CartItem = {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
};

interface CartSummaryProps {
  cartItems: CartItem[];
}

function CartSummary({ cartItems }: CartSummaryProps) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.2; // 20%
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="bg-white rounded-xl shadow p-6 h-fit">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span className="font-semibold">${subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount (-20%)</span>
        <span className="text-red-500 font-semibold">
          -${discount.toFixed(0)}
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Delivery Fee</span>
        <span className="font-semibold">${deliveryFee}</span>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between text-lg font-bold mb-4">
        <span>Total</span>
        <span>${total.toFixed(0)}</span>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add promo code"
          className="flex-1 bg-gray-100 p-3 rounded-l-full outline-none"
        />
        <button className="bg-black text-white px-6 rounded-r-full">
          Apply
        </button>
      </div>
      <button className="w-full bg-black text-white py-4 rounded-full font-semibold">
        Go to Checkout →
      </button>
    </div>
  );
}

export default CartSummary;
