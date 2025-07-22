import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { StoreContext } from "../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const totalAmount =
      getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30;

    const emailParams = {
      firstName: formData.firstName, // Match EmailJS template field names
      lastName: formData.lastName,
      email: formData.email,
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      country: formData.country,
      phone: formData.phone,
      totalAmount: totalAmount, // Ensure this matches the EmailJS template variable
    };

    emailjs
      .send(
        "service_no0qlgn",
        "template_yvetjn8",
        emailParams,
        "1Pb40qkFTD_yygKts"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Order placed successfully!");
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        alert("Failed to place order. Try again.");
      });
  };

  return (
    <section className="px-7 py-3 my-16">
      <form
        className="flex md:flex-row flex-col items-start justify-between gap-10"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <p className="text-2xl lg:text-4xl font-bold">Delivery Information</p>
          <div className="mt-5 space-y-3">
            <div className="flex gap-5 md:gap-10">
              <input
                type="text"
                className="w-full p-2 border-gray-300 border rounded"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="w-full p-2 border-gray-300 border rounded"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-3">
              <input
                type="email"
                name="email"
                className="p-2 w-full border-gray-300 border rounded"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="p-2 w-full border-gray-300 border rounded"
                name="street"
                placeholder="Street Address"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex gap-5 md:gap-10">
              <input
                type="text"
                className="w-full p-2 border-gray-300 border rounded"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="w-full p-2 border-gray-300 border rounded"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex gap-5 md:gap-10">
              <input
                type="text"
                className="w-full p-2 border-gray-300 border rounded"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="w-full p-2 border-gray-300 border rounded"
                name="zip"
                placeholder="Zip code"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border-gray-300 border rounded"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="">
            <h2 className="text-2xl font-bold mb-5">Cart Totals</h2>
            <div className="border-b-2 border-gray-200 text-gray-600 flex justify-between items-center pb-3">
              <p>Sub Totals</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <div className="border-b-2 border-gray-200 text-gray-600 flex justify-between items-center py-3">
              <p>Delivery Fee</p>
              <p>+{getTotalCartAmount() === 0 ? 0 : 30}</p>
            </div>
            <div className="border-b-2 border-gray-200 text-gray-600 flex justify-between items-center py-3">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}
              </b>
            </div>
            <button
              className="text-white bg-orange-500 py-3 mt-5 px-8 rounded hover:bg-orange-700 cursor-pointer"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PlaceOrder;
