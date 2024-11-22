import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const SingleCart = ({ offer, item }) => {
  return (
    <div className="bg-white p-2 rounded-xl">
      <Link href={`product/${item.id}`}>
        <div className="">
          <div className="bg-[#F6F5FD] overflow-hidden h-64 rounded-lg mb-2  relative">
            <Image
              className="overflow-hidden h-full w-full"
              height={252}
              width={286}
              src={item?.thumbnail_image}
              alt="image"
            />
            {offer && (
              <div className="w-11 absolute top-0 right-5 rounded-b-full flex justify-center items-center text-white px-1 h-16 bg-primary">
                <span className="text-center text-sm font-bold">Up to 40%</span>
              </div>
            )}
          </div>
          <div className="">
            {offer && (
              <div className="flex py-2 gap-1 text-sm font-normal items-center">
                {item?.rating &&
                  Array(Math.floor(item.rating))
                    .fill(null)
                    .map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                {item?.rating % 1 !== 0 ? (
                  <FaStarHalfAlt className="text-yellow-500" />
                ) : (
                  <FaStar className="text-gray-200" />
                )}
                ({item?.review})
              </div>
            )}
            <p className="flex justify-between items-center">
              <span className="text-base  font-normal leading-5">
                {item?.title}
              </span>
              <span className="text-lg font-semibold leading-6">
                BDT {item?.price}
              </span>
            </p>
            <button className="w-full mt-5 border-2 border-primary rounded-xl text-center text-base font-semibold leading-5 text-primary py-1">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleCart;
