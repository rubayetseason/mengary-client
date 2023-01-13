import { useQuery } from "@tanstack/react-query";
import ReviewItem from "./ReviewItem";
import Marquee from "react-fast-marquee";

const Review = () => {
  const { data: reviews=[] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = fetch("ReviewData.json");
      const data = await (await res).json();
      return data;
    },
  });

  return <div className="bg-[#f5f5f5] py-16">
    <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">What they say about Mengary</h1>
    <div>
    <Marquee direction="right" gradientWidth={40} speed={15}>
        {
            reviews.map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)
        }
          </Marquee>
    </div>
  </div>;
};

export default Review;
