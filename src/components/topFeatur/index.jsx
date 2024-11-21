import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const TopFeater = ({ title, subtitel, offer }) => {
  const [product, setProduct] = useState([]);
  const swiperRef = useRef(null); // Create a reference for Swiper instance

  const fetchProduct = useCallback(async () => {
    try {
      const res = await fetch("data.json");
      setProduct(await res.json());
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className="container-sk py-10">
      <div className="flex justify-between pb-5 items-center">
        <div>
          <p className="text-lg leading-6 text-primary font-normal">
          {subtitel}
          </p>
          <h1 className="text-[28px] font-bold leading-9">{title}</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()} // Move to previous slide
          >
            <GoArrowLeft className="text-primary border border-primary rounded-full p-1 h-7 w-7" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()} // Move to next slide
          >
            <GoArrowRight className="text-primary border border-primary rounded-full p-1 h-7 w-7" />
          </button>
        </div>
      </div>

      <Swiper
        className="w-full pt-2"
        spaceBetween={20}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide for small screens
          },
          768: {
            slidesPerView: 2, // 2 slides for medium screens
          },
          1024: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance to ref
      >
        {product?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  rounded-lg">
              <div className="bg-[#F6F5FD] relative rounded-lg m-2">
                <Image
                  className="p-2 rounded-lg"
                  height={320}
                  width={300}
                  src="/demo.png"
                  alt="image"
                />
               {
                offer &&  <div className="w-11 absolute top-0 right-5 rounded-b-full flex justify-center items-center text-white px-1   h-16 bg-primary">
                {" "}
                <span className="text-center text-sm font-bold">
                  Up to 40%{" "}
                </span>{" "}
              </div>
               }
              </div>
              <div className="px-2">
                <p className="flex justify-between items-center">
                  <span className="text-base font-noraml leading-5">
                    Indian Sharee
                  </span>
                  <span className="text-lg font-semibold leading-6">
                    BDT 2,300
                  </span>
                </p>
                <button className="w-full mt-5 border-2 border-primary rounded-xl text-center text-base font-semibold leading-5 text-primary py-1">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     <div className="flex justify-center py-5">
     <button className="bg-primary px-5 py-2 rounded-xl">See More</button>
     </div>
    </div>
  );
};

export default TopFeater;
