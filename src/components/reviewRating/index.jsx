import Image from 'next/image';
import React from 'react';
import { BiLike } from 'react-icons/bi';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ReviewRating = () => {
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
  return (
    <div>
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
  );
};

export default ReviewRating;