import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
// import { useState } from "react";
import LoginPopUp from "./Components/LoginPopup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Orders from "./Pages/Orders";
import Contact from "./Pages/Contact";
import { useState } from "react";
import FoodMenu from "./ModalPopup/FoodMenu";
import PlaceOrder from "./Pages/PlaceOrder";

function App() {
  const [showMenuList, setShowMenuList] = useState(false);
  const [category, setCategory] = useState("All");
  // const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {/* {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>} */}
      <Header showMenuList={showMenuList} setShowMenuList={setShowMenuList} />
      <Routes>
        <Route
          path="/"
          element={<Home category={category} setCategory={setCategory} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showMenuList && (
        <FoodMenu
          showMenuList={showMenuList}
          setShowMenuList={setShowMenuList}
          category={category}
          setCategory={setCategory}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
