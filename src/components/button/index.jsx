import React from 'react';
import { TbArrowUpRight } from 'react-icons/tb';

const ShopnowButton = () => {
  return (
    
    <button className="flex text-white items-center">
      <span className="bg-primary rounded-full px-8 py-2 h-10 flex items-center justify-center">
        Shop Now
      </span>
      <TbArrowUpRight className="bg-primary rounded-full p-2 h-10 w-10 flex-shrink-0" />
    </button>
  
  
  );
};

export default ShopnowButton;