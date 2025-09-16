import React from "react";
import { FaTrash } from "react-icons/fa";

const SingleBday = ({id,name,image,age,remove}) => {
  return (
    <>
      <div className="flex justify-between items-center my-3">
        <div className="flex gap-3 items-center">
          <img
            src={image}
            className="w-[60px] h-[60px] rounded-full object-cover"
            alt=""
          />
          <div className="">
            <h2 className="text-1xl">{name}</h2>
            <p className="text-gray-500 text-sm"> {age} years old</p>
          </div>
        </div>
        <button onClick={()=>remove(id)} className="bg-red-500  text-white px-3 py-2 hover:bg-red-700 active:scale-95 cursor-pointer rounded-md">
          <FaTrash /> 
        </button>
      </div>
    </>
  );
};

export default SingleBday;
