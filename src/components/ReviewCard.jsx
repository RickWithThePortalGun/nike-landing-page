import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="justify-center text-center max-w-sm info-text">{feedback}</p>
      <div className="flex flex-row gap-2 justify-center items-center">
        <img src={star} alt="" className="object-contain m-0" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
