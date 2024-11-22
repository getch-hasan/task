import Image from "next/image";
import React from "react";
import ShopnowButton from "../button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
const CollectonSlider = () => {
  const data=[1,2,3] //it will dynamic slide from data but i use this for slide single slide again and again
  return (
    <div className="container-sk py-10">
  
  <Swiper
        className="w-full pt-2"
        modules={[Pagination,Autoplay]} // Enable the Pagination module
        pagination={{
          clickable: true, // Allow pagination bullets to be clickable
        }}
        spaceBetween={20}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000}
       
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
        
        }}
      
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex  flex-col md:flex-row h-[566px] justify-center gap-5 md:gap-20 items-center">
    <div className="bg-[#EEECFB] relative  left-0 flex justify-center">
      <Image className=" " width={468} height={566} src="/assets/boy.svg" alt="" />
    </div>
    <div className="text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-semibold pb-2 leading-10">
        MEN COLLECTION
      </h1>
      <ShopnowButton />
    </div>
  </div>
          </SwiperSlide>
        ))}
      </Swiper>
</div>

  );
};

export default CollectonSlider;
