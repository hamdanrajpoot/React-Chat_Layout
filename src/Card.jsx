import React from "react";

const Card = ({ name, job, image }) => {
  return (
    <>
      <div className="flex shadow mt-2 border-3 border-e-0 border-b-0 border-t-0 border-green-600 border shadow-green-300 p-4  items-center justify-between  rounded gap-3">
        <div className="flex gap-3 items-center">
          <img
            src={image}
            className="w-[70px] h-[70px] rounded-full object-cover"
            alt=""
          />
          <div className="">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-gray-500">{job}</p>
          </div>
        </div>
        <div className="h-[20px] w-[20px] rounded-full bg-green-500"></div>
      </div>
    </>
  );
};

export default Card;
