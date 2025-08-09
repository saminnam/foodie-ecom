import React from "react";

const HeroSection = ({ showMenuList, setShowMenuList }) => {
  return (
    <section className="pt-5 px-5 lg:px-10 relative">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-[url('https://t4.ftcdn.net/jpg/08/63/92/47/360_F_863924717_6JaySgX9dg3BTBlV1mWnTBQLGvYzXbj5.jpg')] bg-cover bg-center bg-no-repeat w-full h-[50vh] md:h-[90vh] relative">
          <div className="w-full px-4 sm:px-8 lg:px-16 absolute top-[50%] -translate-y-1/2">
            <div className="flex flex-col gap-5 justify-center items-center text-white">
              <h2 className="text-2xl md:max-w-[800px] bg-white/10 rounded backdrop-blur-xs px-4 py-3 text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide text-orange-600 capitalize">
                Choose your favourite food here
              </h2>
              {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide font-semibold text-white">
                Choose from a diverse menu featuring a delectable array of
                dishes crafted with the finest ingredients and culinary
                expertise. Our mission is to satisfy your cravings and elevate
                your dining experience, one delicious meal at a time.
              </p> */}
              <button onClick={() => setShowMenuList(true)} className="text-white hover:bg-orange-700 bg-orange-600 font-semibold text-sm sm:text-base lg:text-lg mt-3 sm:mt-5 border px-4 sm:px-5 py-2 sm:py-3 uppercase rounded-full cursor-pointer">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
