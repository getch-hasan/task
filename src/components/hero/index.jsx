import ShopnowButton from "@/components/button";
import React from "react";

const Hero = () => {
    return (
      <div className="relative w-full  h-[650px] flex pt-20 items-center justify-center bg-[url('/assets/hero.svg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative z-10 text-center flex flex-col justify-center px-6 md:px-12 text-white">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
          Elevate Your Everyday Style
          </h1>
          <p className="text-lg font-normal md:text-xl mb-6">
          Discover the Latest Trends in Sustainable Fashion
          </p>
          <div className="flex justify-center"><ShopnowButton/></div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  


