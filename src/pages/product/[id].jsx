import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { TbShoppingBag } from "react-icons/tb";

import { useRouter } from "next/router";
import TopFeater from "@/components/topFeatur";
import Details from "@/components/details";
import ReviewRating from "@/components/reviewRating";
import Discussion from "@/components/discussion";
const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("review-rating");
  const { id } = router.query;
  console.log(id);

  const data = product?.find((item) => item.id == id); //find data using id

  const fetchProduct = useCallback(async () => {
    try {
      const res = await fetch("/data.json");
      setProduct(await res.json());
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }, []);
  const [cart, setCart] = useState([]);
  const handelCart = () => {
    //example if add to cart system using local storage
    const cartItem = data;

    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : { cart_items: [] };

    const isProductInCart = cart?.cart_items?.some(
      (item) => item?.id === cartItem?.id
    );

    if (isProductInCart) {
      //Toastify.Warning("Already in Cart");
      alert("altready in card");
    } else {
      cart.cart_items.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
      //Toastify.Success("Product added successfully");
    }
  };
  console.log(cart);
  useEffect(() => {
    fetchProduct();
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
  }, [fetchProduct]);

  const handleQuantityChange = (type) => {
    if (type === "increment") setQuantity(quantity + 1);
    if (type === "decrement" && quantity > 1) setQuantity(quantity - 1);
  };

  const sections = [
    { name: "Details", route: "details" },
    { name: "Review & Rating", route: "review-rating" },
    { name: "Discussion", route: "discussion" },
  ];
  // Default component to render
  const renderComponent = (section) => {
    switch (section) {
      case "details":
        return <Details />;
      case "review-rating":
        return <ReviewRating />;
      case "discussion":
        return <Discussion />;
      default:
        return <ReviewRating />;
    }
  };

  return (
    <main className="">
      {/* Left Section: Image Section */}
      <div className="flex flex-col container-sk py-44 mx-auto lg:flex-row items-start gap-10">
        <div className="flex-1">
          <h1 className="text-base font-semibold leading-5">
            Feature Product /{" "}
            <span className="text-primary"> {data?.category}</span>
          </h1>
          <div className="relative w-full  h-64 md:h-[500px]">
            {/* Main Product Image */}
            <Image
              width={580}
              height={500}
              src={data?.thumbnail_image}
              alt="White Hoodie"
              className="w-full h-full object-fill rounded-lg"
            />
            {/* Navigation Arrows */}
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 border border-primary p-2 rounded-full ">
              <GoArrowLeft className="text-primary" size={24} />
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 border border-primary p-2 rounded-full">
              <GoArrowRight className="text-primary" size={24} />
            </button>
          </div>
          {/* Thumbnails */}
          <div className="hidden md:flex gap-3 mt-5 justify-start">
            {data?.gallery_image.map((img, index) => (
              <div
                key={index}
                className="w-20 h-20 border border-gray-300 rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  height={144}
                  width={144}
                  src={`/${img}`}
                  alt={``}
                  className="w-full h-full object-fill"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="flex-1">
          <span className="inline-block bg-[#2F1C59] text-white text-base px-7 py-1 rounded-xl mb-6">
            {data?.category}
          </span>
          <h1 className="text-3xl font-semibold mb-2 leading-10">
            {data?.title}
          </h1>
          <div className="flex items-center mb-4">
            {/* Ratings */}
            <div className="flex">
              {data?.rating &&
                Array(Math.floor(data.rating))
                  .fill(null)
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
              {data?.rating % 1 !== 0 ? (
                <FaStarHalfAlt className="text-yellow-500" />
              ) : (
                <FaStar className="text-white" />
              )}
            </div>
            <p className="ml-2 text-gray-500">({data?.rating})</p>
            <p className="ml-4 text-primary font-semibold text-base">
              {data?.review} reviews
            </p>
          </div>
          <p className="text-[28px] font-bold mb-2 leading-9">
            BDT {data?.price}
          </p>

          {/* Available Sizes */}
          <div className="border-y py-5 grid md:grid-cols-2 justify-between">
            <div className="mb-6">
              <h3 className="text-xl font-semibold leading-6 mb-2">
                Available Size
              </h3>
              <div className="flex gap-4">
                {data?.size?.map((size) => (
                  <button
                    key={size}
                    className={`w-10 h-10 rounded-lg  text-sm ${
                      selectedSize === size
                        ? "border border-primary text-primary"
                        : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Available Colors */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold leading-6 mb-2">
                Available Color
              </h3>
              <div className="flex gap-4">
                {data?.color?.map((color) => (
                  <>
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full   border ${
                        selectedColor === color
                          ? "ring-2 ring-purple-500"
                          : "border-gray-400"
                      }`}
                      style={{ backgroundColor: color?.code }}
                      onClick={() => setSelectedColor(color)}
                    ></button>
                    <p>{color?.name}</p>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="py-5">
            <h3 className="text-base font-bold leading-5 mb-2">Quantity</h3>
            <div className="flex items-center bg-[#ECE9FE] w-32 gap-4 rounded-full">
              <button
                className="w-10 h-10  flex items-center justify-center text-base font-semibold leading-5"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <span className="text-base font-semibold leading-5">
                {quantity}
              </span>
              <button
                className="w-10 h-10  flex items-center justify-center text-base font-semibold leading-5"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6">
            <button className="bg-primary text-white w-72 px-6 py-2 rounded-lg font-semibold text-base">
              Buy Now
            </button>
            <button
              onClick={handelCart}
              className="border border-purple-500 w-72 text-purple-500 px-6 py-2 rounded-lg font-semibold text-base"
            >
              Add to Cart
            </button>
          </div>
          <div className="hidden fixed bottom-1/2 z-50 right-0 md:flex flex-col  justify-center items-center bg-[#581FC1] text-white px-4 py-2 rounded-l-2xl shadow-lg">
            <TbShoppingBag className="h-6 w-6" />
            Your Bag
            <span>{cart?.cart_items?.length}</span>
          </div>
        </div>
      </div>
      <div className=" bg-white ">
        <div>
          {/* Navigation Links */}
          <div className="bg-white py-4 px-6 container-sk">
            <ul className="flex space-x-8">
              {sections?.map((section) => (
                <li key={section?.route}>
                  <button
                    onClick={() => setActiveSection(section?.route)}
                    className={`text-lg ${
                      activeSection === section.route
                        ? "text-blue-600 font-semibold"
                        : "text-gray-500 hover:text-blue-600"
                    }`}
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Nested Content Rendering */}
          <div className="mt-6">{renderComponent(activeSection)}</div>
        </div>
      </div>

      <TopFeater title="Related Product" />
    </main>
  );
};

export default ProductDetailPage;
