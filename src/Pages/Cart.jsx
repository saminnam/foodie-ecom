import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="my-16 py-3 px-7">
      <div>
        <div className="grid border-gray-200 pb-2 border-b-2 text-[14px] font-semibold grid-cols-6 text-gray-800 items-center">
          {/* <p>No:</p> */}
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {food_list
          .filter((item) => cartItems[item._id] > 0)
          .map((item, index) => (
            <div key={index} className="border-b-2 border-gray-200">
              <div className="grid grid-cols-6 text-gray-600 text-[15px] font-medium items-center my-10 rounded">
                {/* <p>{cartItems.length()}</p> */}
                <img src={item.image} alt="" className="w-[70px] h-[70px] rounded"/>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className="cursor-pointer text-xl">
                  <IoClose />
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-10 flex justify-between gap-10 lg:flex-row flex-col-reverse">
        <div className="flex flex-col gap-5 w-full">
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div className="">
            <div className="flex border-b-2 border-gray-200 pb-3 justify-between text-gray-600">
              <p>Sub Totals</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 py-3 text-gray-600">
              <p>Delivery Fee</p>
              <p>+{getTotalCartAmount() === 0 ? 0 : 30}</p>
            </div>
            <div className="flex justify-between py-3 text-gray-600">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}
              </b>
            </div>
          </div>
          <button className="text-white bg-orange-500 py-4 rounded hover:bg-orange-700 cursor-pointer" onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="w-full">
          <div>
            <p className="text-lg font-semibold md:text-start text-center">If you have promo code, Enter it here.</p>
            <div className="flex md:flex-row flex-col mt-4 md:gap-0 gap-5 justify-between items-center rounded">
              <input type="text" placeholder="Promocode" className="ps-10 py-4 w-full bg-[#eaeaea]"/>
              <button className="py-4 px-16 text-white bg-[#393030] rounded cursor-pointer uppercase hover:bg-[#141111]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
