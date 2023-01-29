import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import underline from "../../../Components/Carousel/images/underline.png";
import StripeCheckout from "react-stripe-checkout";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const money = localStorage.getItem("total");

  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-0">
        <h1 className="text-center text-3xl md:text-4xl font-bold pt-16">
          Payment
        </h1>
        <img className="w-96 mt-[-52px] mb-[-15px]" src={underline} alt="" />
      </div>
      <div className="text-center text-xl font-semibold mt-5 mb-10">
        The payment due is $ {money}
      </div>
      <div className="text-center mb-10">
        <StripeCheckout
          token={onToken}
          name="Mengary Payment"
          amount={money * 100}
          stripeKey={process.env.REACT_APP_STRIPE_PK}
        />
      </div>
    </div>
  );
};

export default Payment;
