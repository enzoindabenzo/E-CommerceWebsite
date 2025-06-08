// *********************
// Role of the component: Rating stars component that will display stars on the single product page 
// Name of the component: SingleProductRating.tsx
// Developer: Lorenco Zeza
// Component call: <SingleProductRating rating={rating} />
// Input parameters: { rating: number }
// Output: full colored star icons and outlined star icons depending on the ratingArray element("empty star" or "full star")
// *********************

import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleProductRating = ({ rating }: { rating: number }) => {
  // Ensure rating stays within bounds (0 to 5)
  const safeRating = Math.max(0, Math.min(rating, 5));

  // Create rating array with full and empty stars
  const ratingArray = Array(5)
    .fill("empty star")
    .map((_, i) => (i < safeRating ? "full star" : "empty star"));

  return (
    <div className="flex text-2xl items-center max-[500px]:justify-center">
      {ratingArray.map((singleRating, index) => (
        singleRating === "full star" ? (
          <AiFillStar key={index} className="text-custom-yellow" />
        ) : (
          <AiOutlineStar key={index} className="text-custom-yellow" />
        )
      ))}
      <span className="text-xl ml-1">(3 reviews)</span>
    </div>
  );
};

export default SingleProductRating;
