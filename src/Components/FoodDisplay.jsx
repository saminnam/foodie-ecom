import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <section className="lg:px-10 px-5 py-10" id="food_display">
      <div className="container mx-auto">
        <h2 className="text-[#464546] text-2xl md:text-5xl font-semibold">Top Dishes near you </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 2xl:grid-cols-5">
          {food_list.map((item, index) =>
            category === "All" || category === item.category ? (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                desc={item.desc}
                price={item.price}
                image={item.image}
                category={item.category}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default FoodDisplay;
