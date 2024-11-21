import Image from "next/image";
import React from "react";
import ShopnowButton from "../button";

const CollectonSlider = () => {
  return (
    <div className="container-sk py-10">
  <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-20 items-center">
    <div className="bg-[#EEECFB] flex justify-center">
      <Image width={450} height={550} src="/demo.png" alt="" />
    </div>
    <div className="text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-semibold pb-2 leading-10">
        MEN COLLECTION
      </h1>
      <ShopnowButton />
    </div>
  </div>
</div>

  );
};

export default CollectonSlider;
