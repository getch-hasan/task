import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SingleCart from "../singleCart";

const TopFeater = ({ title, subtitel, offer }) => {
  const [product, setProduct] = useState([]);
  const swiperRef = useRef(null); // Create a reference for Swiper instance

  const fetchProduct = useCallback(async () => {
    try {
      const res = await fetch("/data.json");
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
          {subtitel && (
            <p className="text-lg leading-6 text-primary font-normal">
              {subtitel}
            </p>
          )}
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
          delay: 300,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
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
            <SingleCart item={item} offer={offer} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center py-5">
        <button className="bg-primary px-5 py-2 text-white rounded-xl">
          See More
        </button>
      </div>
    </div>
  );
};

export default TopFeater;
