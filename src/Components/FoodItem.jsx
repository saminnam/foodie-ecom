import React, { useContext } from "react";
import { Assets } from "../assets/Assets";
import { StoreContext } from "../Context/StoreContext";
import { FiPlusCircle } from "react-icons/fi";
import { LuCircleMinus } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";

const FoodItem = ({ id, name, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <section>
      <div className="border border-slate-300 shadow group rounded overflow-hidden">
        <div className="relative">
          <div className="h-[200px]">
            <img
              className="w-full group-hover:scale-105 transition-all duration-300 ease-linear h-full object-cover"
              src={image}
              alt={name}
            />
          </div>
          {!cartItems[id] ? (
            <div className="bg-white p-2 cursor-pointer absolute bottom-2 right-2 text-xl text-orange-600 rounded">
              {" "}
              <AiOutlineShoppingCart onClick={() => addToCart(id)} />
            </div>
          ) : (
            <div className="flex gap-3 bg-white rounded-full items-center shadow absolute bottom-2 right-2 py-1 px-1">
              <LuCircleMinus
                onClick={() => removeFromCart(id)}
                className="text-lg"
              />
              <p className="font-semibold">{cartItems[id]}</p>
              <FiPlusCircle onClick={() => addToCart(id)} className="text-lg" />
            </div>
          )}
        </div>
        <div className="space-y-2 px-3 pb-3">
          <div className="">
            <p className="text-lg font-semibold mt-4">{name}</p>
            <div className="flex gap-1 text-orange-500 mt-1">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
          </div>
          {/* <p className="text-gray-600 text-sm">{desc}</p> */}
          <p className="font-bold">₹ {price}</p>
        </div>
      </div>
    </section>
  );
};

export default FoodItem;
