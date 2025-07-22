import React, { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <HeroSection />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
