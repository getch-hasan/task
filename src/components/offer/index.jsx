import Image from 'next/image';
import React from 'react';
import ShopnowButton from '../button';

const Offer = () => {
  return (
    <div className="container-sk relative flex flex-col md:h-[450px] gap-5 lg:flex-row justify-between items-center bg-[#EEECFB] p-5 lg:p-10">
  <div className="text-center flex flex-col  lg:text-left lg:px-10">
    <p className="font-normal text-2xl text-primary font-pacifico leading-9">
      Big Deal
    </p>
    <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-9 lg:leading-10 py-5">
      <span className='text-primary'>30%</span> Off for New Customers
    </p>
    <div className='flex justify-center md:justify-start'><ShopnowButton /></div>
  </div>
  <div className="flex md:absolute bottom-0 md:right-20 justify-center lg:justify-end">
    <Image
      className="max-w-full h-auto"
      height={495}
      width={427}
      src="/assets/couple.svg"
      alt=""
    />
  </div>
</div>

  );
};

export default Offer;