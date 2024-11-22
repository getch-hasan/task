import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { TbShoppingBag } from "react-icons/tb";
import { BiLike } from "react-icons/bi";
import { useRouter } from "next/router";
import TopFeater from "@/components/topFeatur";
const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Off White");
  const [product, setProduct] = useState([]);
  const router=useRouter()
  const { id } = router.query;
  console.log(id);
  const reviews = [
    {
      id: 1,
      name: "Cameron Williamson",
      date: "3 days ago",
      comment: "Very Nice!",
      rating: 4,
    },
    {
      id: 2,
      name: "Cameron Williamson",
      date: "3 days ago",
      comment: "Very Nice!",
      rating: 4,
    },
  ];
  const ratingDistribution = [
    { stars: 5, count: 50 },
    { stars: 4, count: 30 },
    { stars: 3, count: 10 },
    { stars: 2, count: 5 },
    { stars: 1, count: 1 },
  ];

  const totalReviews = 121;
  const averageRating = 4.0;

  const data = product?.find((item) => item.id == id);

  console.log(data);

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

  const handleQuantityChange = (type) => {
    if (type === "increment") setQuantity(quantity + 1);
    if (type === "decrement" && quantity > 1) setQuantity(quantity - 1);
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
              {data?.rating % 1 !== 0 ? 
                <FaStarHalfAlt className="text-yellow-500" />: <FaStar className="text-white"/>
            }
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
            <button className="border border-purple-500 w-72 text-purple-500 px-6 py-2 rounded-lg font-semibold text-base">
              Add to Cart
            </button>
          </div>
          <div className="hidden fixed bottom-1/2 z-50 right-0 md:flex flex-col  justify-center items-center bg-[#581FC1] text-white px-4 py-2 rounded-l-2xl shadow-lg">
            <TbShoppingBag className="h-6 w-6" />
            Your Bag
            <span>0</span>
          </div>
        </div>
      </div>

      <div className=" bg-white ">
        <div className="flex flex-col container-sk py-10 md:flex-row gap-8">
          {/* Review List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <select className="border text-base font-semibold leading-5 border-gray-300 px-5 py-2 rounded-xl">
                <option className="" value="newest">
                  Newest
                </option>
                <option className="" value="oldest">
                  Oldest
                </option>
                <option className="" value="highest">
                  Highest Rated
                </option>
              </select>
            </div>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-300 py-4 flex gap-4"
              >
                <Image
                  width={40}
                  height={40}
                  src="/assets/people.svg"
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex gap-2 items-center"><h4 className="font-semibold text-base leading-5">{review.name}</h4>
                  <span className="text-sm text-[#656565] font-normal leading-4">{review.date}</span></div>
                  <div className="flex items-center my-2">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="text-yellow-500">
                        {index < review.rating ? <FaStar className="h-8 w-8" /> : <FaRegStar className="h-8 w-8"/>}
                      </span>
                    ))}
                  </div>
                  <p className="text-base font-bold leading-5">{review.comment}</p>
                  <p  className="text-sm flex justify-start items-center gap-2 text-gray-500 mt-2"><BiLike/> 10</p>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Distribution */}
          <div className="w-full md:w-1/3">
         <div className="flex items-center mb-5 gap-5">
         <h3 className="font-semibold  leading-4 text-base">Product Review</h3>
         <p className="text-gray-500">{totalReviews} reviews</p>
         </div>
            <div className="flex items-center mb-2">
              <span className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <FaStar className="w-10 h-10" key={index} />
                ))}
              </span>
              <span className="ml-2">({averageRating})</span>
            </div>
           
            <div className="mt-4">
              {ratingDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">{dist.stars}</span>
                  
                  <div className="w-full h-[10px] bg-gray-200 rounded relative">
                    <div
                      className="absolute top-0 left-0 h-[10px] bg-yellow-500 rounded"
                      style={{
                        width: `${(dist.count / totalReviews) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{dist.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <TopFeater title='Related Product'/>
    </main>
  );
};

export default ProductDetailPage;
