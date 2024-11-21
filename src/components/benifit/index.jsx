import Image from "next/image";
import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { IoMdCash } from "react-icons/io";

const Benifit = () => {
  const data = [
    {
      logo: <LiaShippingFastSolid className="text-3xl" />,
      title: "FREE SHIPPING",
      comment: "BUY BDT 3000+ & GET FREE DELIVERY",
    },
    {
      logo: <MdOutlineCurrencyExchange className="text-3xl" />,
      title: "7 DAYS EXCHANGE",
      comment: "EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS",
    },
    {
      logo: <IoMdCash className="text-3xl" />,
      title: "100% PAYMENT SECURE",
      comment: "CASH ON DELIVERY AND SECURED ONLINE PAYMENT",
    },
  ];

  return (
    <div className="bg-primary">
      <div className="flex flex-col md:flex-row container-sk  md:gap-4 text-white justify-between">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-start rounded-xl justify-center py-5 shadow-custom"
          >
            <div>{item.logo}</div>
            <div>
              <p className="text-lg font-semibold leading-6">{item.title}</p>
              <p className="text-sm font-normal leading-4">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifit;
