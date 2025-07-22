import React, { useContext, useState } from "react";
import { Assets } from "../assets/Assets";
import { FaTimes } from "react-icons/fa";
import { FaBasketShopping, FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const Header = ({ showMenuList, setShowMenuList }) => {
  const [menu, setMenu] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow px-7 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={Assets.logo}
            alt="logo"
            className="w-[100px] lg:w-[150px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:gap-16 gap-5 text-[#49557e] lg:text-lg text-sm font-semibold">
          <Link to="/">Home</Link>
          <div onClick={() => setShowMenuList(true)} className="cursor-pointer">Menu</div>
          <Link to={"/cart"}>Cart</Link>
          <Link to={"/orders"}>Orders</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5 lg:gap-[40px] text-[#49557e]">
          <FaSearch className="text-xl" />
          <div className="relative">
            <Link to="/cart">
              <FaBasketShopping className="text-xl" />
            </Link>
            {getTotalCartAmount() !== 0 && (
              <div className="absolute -top-2 -right-1 rounded-full bg-orange-600 h-2 w-2"></div>
            )}
          </div>
          <button
            className="hidden lg:block bg-transparent text-[#49557e] border py-2 px-6 font-semibold uppercase rounded-full"
          >
            Sign In
          </button>
          {/* Mobile Menu Icon */}
          <button
            className="block lg:hidden text-xl"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white mt-5 px-5 pb-5">
          <ul className="flex flex-col gap-4 text-[#49557e] font-medium">
            <Link
              to="/"
              onClick={() => {
                setMenu("Home");
                toggleMobileMenu();
              }}
            >
              Home
            </Link>
            <a
              href="#explore_menu"
              onClick={() => {
                setMenu("Menu");
                toggleMobileMenu();
              }}
            >
              Menu
            </a>
            <a
              href="#app_download"
              onClick={() => {
                setMenu("Mobile-App");
                toggleMobileMenu();
              }}
            >
              Mobile-App
            </a>
            <a
              href="#footer"
              onClick={() => {
                setMenu("Contact-Us");
                toggleMobileMenu();
              }}
            >
              Contact-Us
            </a>
            <button
              className="px-5 max-w-max border mt-2 py-2 rounded uppercase"
              onClick={() => {
                setShowLogin(true);
                toggleMobileMenu();
              }}
            >
              Sign In
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
