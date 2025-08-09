import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Assets } from "../assets/Assets";

const Footer = () => {
  return (
    <footer className="bg-[#F54A00] py-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <img
          className="h-16 sm:mx-auto invert brightness-0"
          src={Assets.logo}
          alt="Company name"
        />
        <nav
          aria-label="Footer"
          className="mt-8 grid text-white grid-cols-2 font-medium gap-6 sm:flex sm:justify-center sm:gap-8"
        >
          <Link to={"/"} className="hover:text-[#464546] transition-all duration-300">Home</Link>
          <Link to={"/menu"} className="hover:text-[#464546] transition-all duration-300">Menu</Link>
          <Link to={"/cart"} className="hover:text-[#464546] transition-all duration-300">Cart</Link>
          <Link to={"/orders"} className="hover:text-[#464546] transition-all duration-300">Orders</Link>
          <Link to={"/contact"} className="hover:text-[#464546] transition-all duration-300">Contact</Link>
        </nav>

        <div className="mt-12 border-t border-white pt-8 sm:mt-16 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-6 sm:order-2 text-white text-lg">
            <a href="#" className="hover:text-[#464546]" aria-label="Twitter">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-[#464546]" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-[#464546]" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#464546]" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#464546]" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
          <p className="mt-6 text-sm leading-6 text-white sm:mt-0 md:order-1">
            © 2025 Fit Foodie Finds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
