import React from "react";
import { menu_list } from "../assets/Assets";

// Declares a functional component named ExploreMenu that takes two props
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="lg:px-10 px-5 py-10 md:block hidden" id="explore_menu">
      <div className="container mx-auto">
        <h2 className="text-[#464546] text-2xl md:text-5xl font-semibold">
          Explore Our Menu
        </h2>
        <p className="text-sm md:text-lg tracking-wide font-medium mt-5">
          Experience the joy of dining from the comfort of your home with our
          fast and reliable delivery service. At Foodie Delight, we pride
          ourselves on offering fresh ingredients, delectable flavors, and
          exceptional customer service.
        </p>
        <div className="mt-16 hidden lg:flex gap-2 lg:gap-10 explore_menu_list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="explore_menu_list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_img}
                  alt={item.menu_name}
                />
                <p className="text-lg text-center mt-2 font-medium text-gray-600">
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div>
        {/* for mobile screen */}
        {/* <div className="mt-16 lg:hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-5">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="flex gap-5 items-center"
              >
                <div className="w-[80px] h-[80px] overflow-hidden rounded-full md-explore_menu_list-item">
                  <img
                    className={category === item.menu_name ? "object-cover w-full h-full active" : "object-cover w-full h-full"}
                    src={item.menu_img}
                    alt={item.menu_name}
                  />
                </div>
                <p className="text-lg text-center mt-2 font-medium text-gray-600">
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default ExploreMenu;
