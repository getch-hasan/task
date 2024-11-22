import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars, FaRegUser, FaSearch, FaTimes } from "react-icons/fa";
import { TbShoppingBag } from "react-icons/tb";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search toggle on small devices
  const pathName = usePathname();
  const [cart, setCart] = useState({
    cart_items: [],
    
  });
  const navList = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Deals", href: "/deals" },
    { name: "What'sNew", href: "/what'sNew" },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  useEffect(() => {
    const updateCart = () => {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    };
    updateCart();

    window.addEventListener("cartUpdated", updateCart);
    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);
  return (
    <div className="w-full z-50  bg-[#F5F3FF] fixed">
      <nav className="py-3 flex container-sk justify-between text-black items-center">
        <div className="flex items-center gap-2">
          {/* Drawer Toggle Button for Small Devices */}
          <button
            aria-label="submit"
            onClick={toggleDrawer}
            className="lg:hidden md:hidden text-xl p-2"
          >
            {isDrawerOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link aria-label="link" href="/">
          <Image height={30} width={150} src='/assets/logo.svg' alt=""/>
           
          </Link>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden md:flex items-center md:gap-10 lg:gap-15">
          {navList.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`${
                pathName === item.href ? "text-primary font-bold" : "text-black"
              }  text-base`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <div className="flex items-center space-x-4 p-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full px-3 py-1">
      <FaSearch className="text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 focus:outline-none text-sm w-full"
      />
    </div>

            {/* Search Icon for Small Devices */}
            <div className="md:hidden flex items-center">
              <button
                aria-label="toggle search"
                onClick={toggleSearch}
                className="text-lg"
              >
                <FaSearch />
              </button>
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-2 border border-gray-300 rounded-full px-3 py-1 focus:outline-none text-sm"
                />
              )}
            </div>

            {/* Cart Icon with Badge */}
            <div className="relative">
              <TbShoppingBag className="h-6 w-6" />
              <div className="absolute -top-2 -right-2  bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
               <span> {cart?.cart_items?.length}</span>
              </div>
            </div>

            {/* User Icon */}
            <div>
              <FaRegUser className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Drawer for Small Screens */}
        {isDrawerOpen && (
          <div className="fixed inset-0 z-40 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={toggleDrawer}
            ></div>

            {/* Drawer */}
            <div className="relative bg-white w-64 h-full shadow-lg flex flex-col p-4 font-poppins">
              <button
                aria-label="submit"
                onClick={toggleDrawer}
                className="self-end mb-4"
              >
                <FaTimes size={24} />
              </button>
              {navList.map((item, index) => (
                <Link
                  aria-label="link"
                  href={item.href}
                  key={index}
                  onClick={toggleDrawer} // Close drawer on link click
                  className={`${
                    pathName === item.href
                      ? "font-extrabold text-[#79D802] font-poppins"
                      : "text-black"
                  } text-lg py-2`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
