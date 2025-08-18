import { Trash2 } from "lucide-react";

// 1. Define type for each cart item
type CartItem = {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
};

// 2. Define props type
interface FeatureCartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

function FeatureCart({ cartItems, setCartItems }: FeatureCartProps) {
  const handleAdd = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleDelete = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="lg:col-span-2">
      <h1 className="text-4xl font-extrabold mb-6">YOUR CART</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-500 text-sm">Size: {item.size}</p>
                <p className="text-gray-500 text-sm">Color: {item.color}</p>
                <p className="font-semibold mt-1">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-full">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-3 py-1"
                >
                  −
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => handleAdd(item.id)}
                  className="px-3 py-1"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCart;
