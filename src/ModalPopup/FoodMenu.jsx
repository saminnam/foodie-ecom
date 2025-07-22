import React from "react";
import { menu_list } from "../assets/Assets";

const FoodMenu = ({ showMenuList, setShowMenuList, category, setCategory }) => {
  return (
    <section
      className={`${
        showMenuList
          ? "fixed top-0 left-0 bg-black/50 w-full h-full z-50 flex justify-center items-center"
          : "hidden"
      }`}
    >
      <div className="lg:w-[400px] relative w-full mx-5 p-5 rounded bg-white shadow-xl">
        <button className="absolute right-5 top-5 text-xl cursor-pointer font-bold" onClick={() => setShowMenuList(false)}>x</button>
        {menu_list.map((item, index) => (
          <div key={index} onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                } className="flex gap-5 hover:bg-slate-100 transition-all duration-300 ease-linear cursor-pointer items-center mb-3">
            <img
              src={item.menu_img}
              alt={item.menu_name}
              className="w-12 h-12"
            />
            <p className="text-lg font-medium text-gray-600">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodMenu;
