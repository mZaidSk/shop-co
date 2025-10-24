import { Minus, Plus, Tag, Trash2 } from "lucide-react";
import React, { useState } from "react";
import EmptyCart from "../components/Cart/EmptyCart";


const CartPage = () => {

  // Sample cart data (later replace with Redux or API data)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Black Hoodie",
      price: 49.99,
      color:"blue",
      size:"medium",
      quantity: 1,
      image: "../src/assets/images/products_img/card1.png",
    },
    {
      id: 2,
      name: "White Sneakers",
      price: 89.99,
      color:"red",
      size:"large",
      quantity: 2,
      image: "../src/assets/images/products_img/card2.png",
    },
      {
      id: 3,
      name: "White Sneakers",
      price: 89.99,
      color:"red",
      size:"large",
      quantity: 2,
      image: "../src/assets/images/products_img/card2.png",
    },
  ]);

  // Increase quantity
  const handleAdd = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity (remove if 0)
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

    const RemoveProduct = (id: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity=0 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="pb-[3rem]">
      <h1 className="text-3xl font-bold my-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="w-full h-full">
          <EmptyCart/>
        </div>
      ) : (
        //  carttab
        <div className= "flex flex-col gap-2 w-full justify-center items-start md:flex-row  ">

            {/* cart detail */}
          <div className="border border-[#0000001A] shadow-md rounded-2xl w-full md:w-3/5 h-fit py-4 px-3  ">
            {cartItems.map((item,index) => (
                <div key={index}
                className="w-full  ">
                  {index===0 ? "":<hr className="my-4 border-[#0000001A] " />}
                  <div
                    key={index}
                    className="flex items-center w-full h-fit gap-4  rounded-lg "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-26 h-22 md:size-26 rounded-md object-cover"
                    />
                    <div className="w-3/4 md:w-2/4 flex flex-col justify-between h-22 md:h-26 ">
                    <div>
                      <h2 className="text-sm md:text-lg font-semibold">{item.name}</h2>
                      <h2 className="text-[11px] md:text-xs font-light">Color : <span className="font-extralight">{item.color}</span></h2>
                      <h2 className="text-[11px] md:text-xs font-light">Size : <span className="font-extralight">{item.size}</span></h2>
                    </div>
                      <p className="text-lg md:text-xl font-semibold">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end w-1/4 md:w-[200px] justify-between h-26">
                      <Trash2 
                      className="text-red-600 size-4 sm:size-5 cursor-pointer" 
                      onClick={()=>{RemoveProduct(item.id)}} />
                        <div className="flex justify-around items-center w-fit px-2 h-6 md:h-8   bg-[#F0F0F0] gap-4 md:gap-6 rounded-[62px] ">
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="cursor-pointer"
                          >
                            <Minus className="size-3 md:size-4 text-base"/>
                          </button>
                          <span className="text-sm md:text-lg">{item.quantity}</span>
                          <button
                            onClick={() => handleAdd(item.id)}
                            className="cursor-pointer"
                          >
                            <Plus className="size-3 md:size-4 text-base"/>
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              
            ))}
          </div>
           
          {/* order summary */}
            < OrderSummary total={totalPrice}/>


        </div>
      )}


    </div>
  );
};

type total ={
  total:number;
}

const OrderSummary:React.FC<total> = ({total}) => {

  const discount = 15;
  return(
    <div className="w-full md:w-2/5   flex justify-center items-center">
            <div className="w-full bg-white border border-[#0000001A] shadow-md rounded-2xl p-6 space-y-4">
              {/* Heading */}
              <h2 className="text-lg md:text-xl font-bold">Order Summary</h2>

              {/* Subtotal */}
              <div className="flex justify-between text-gray-700">
                <span className="text-sm md:text-lg">Subtotal</span>
                <span className="font-medium text-sm md:text-lg">{total.toFixed(2)}</span>
              </div>

              {/* Discount */}
              <div className="flex justify-between text-gray-700">
                <span className="text-sm md:text-lg">Discount (-20%)</span>
                <span className="text-red-500 font-medium text-sm md:text-lg">-$113</span>
              </div>

              {/* Delivery Fee */}
              <div className="flex justify-between text-gray-700">
                <span className="text-sm md:text-lg">Delivery Fee</span>
                <span className="font-medium text-sm md:text-lg">${discount}</span>
              </div>

              {/* Divider */}
              <hr />

              {/* Total */}
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${Math.ceil(total+discount)}</span>
              </div>

              {/* Promo Code */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-gray-100 rounded-full px-2 w-full">
                  <Tag  className="text-gray-500 size-4 md:size-5 ml-2" />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="bg-transparent w-full px-2 py-2 outline-none text-xs md:text-sm"
                  />
                </div>
                <button className="bg-black text-white rounded-full px-4 py-2  text-xs md:text-sm cursor-pointer">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button 
              className="w-full bg-black text-white py-3 rounded-full text-xs md:text-sm font-medium flex justify-center items-center gap-2 cursor-pointer"
              >
                Go to Checkout →
              </button>
            </div>
      </div>
  );
}

export default CartPage;
