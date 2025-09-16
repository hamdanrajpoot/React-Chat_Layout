import React, { useState } from "react";
import SingleBday from "./SingleBday";
import { FaTrash } from "react-icons/fa";
import { bdays } from "./bdays";
import { HiOutlineRefresh } from "react-icons/hi";

const Birthday = () => {
  const [data, setData] = useState(bdays);
const removeBirthday = (id) => {
let newData = data.filter((item,index)=>{
  return item.id !==id
})

setData(newData)
}

  return (
    <>
      <div className=" my-1 container xl:w-[30%] lg:w-[45%] md:w-[55%] w-[90%] mx-auto p-5 rounded-md shadow-2xl border border-gray-200 mt-10">
        <h1 className="text-3xl text-center">{data.length} Birthdays Today</h1>
        {data.map((item, index) => {
          return <SingleBday remove ={removeBirthday} {...item} key={index} />;
        })}

        <button
          onClick= {data.length == 0 ? ()=>  setData(bdays) : ()=> setData([])}
          className={`${
            data.length == 0
              ? "bg-green-500  hover:bg-green-700"
              : "bg-red-500  hover:bg-red-700"
          } w-full text-white px-3 py-2 active:scale-95 cursor-pointer rounded-md flex justify-center`}
        >
          {data.length == 0 ?  <HiOutlineRefresh /> : <FaTrash />}
        </button>
      </div>
    </>
  );
};

export default Birthday;
