import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Review = () => {
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = fetch("ReviewData.json");
      const data = await (await res).json();
      return data;
    },
  });

  console.log(reviews);

  return <div>this is review</div>;
};

export default Review;
