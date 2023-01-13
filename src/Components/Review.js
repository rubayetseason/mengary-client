import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

const Review = () => {
  const { data: reviews=[] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = fetch("ReviewData.json");
      const data = await (await res).json();
      return data;
    },
  });

  console.log(reviews);

  return <div className="bg-[#f5f5f5]">
    <h1 className="text-4xl font-semibold text-center">What they say about Mengary</h1>
    <div>
        {
            reviews.map(review => <ReviewItem review={review}></ReviewItem>)
        }
    </div>
  </div>;
};

export default Review;
