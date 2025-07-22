import React from "react";
import ExploreMenu from "../Components/ExploreMenu.jsx";
import FoodDisplay from "../Components/FoodDisplay";
import HeroSection from "../Components/HeroSection";

const Home = ({category, setCategory }) => {
  
  return (
    <div>
      <HeroSection />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
