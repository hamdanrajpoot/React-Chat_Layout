import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const SingleAccordian = ({ id, question, answer }) => {
  const [open, setOpen] = useState(false);
  // const handleOpen =()=>{
  //   if(open){
  //     setOpen(false)
  //   }else{
  //     setOpen(true)
  //   }
  // }
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="xl:w-[33%] my-3 lg:w-[45%] md:w-[55%] w-[90%] mx-auto p-5 rounded-md shadow-2xl border border-gray-200 mt-10"
      >
        <div className="flex cursor-pointer  justify-between items-center">
          0{id} {question}
          <IoMdArrowDropdown
            className={`transition-all duration-400 shadow-lg  ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <p
          className={`text-gray-500  bg-blue-100 hover:bg-blue-300 text-justify transition-all duration-500 ease-in-out ${
            open ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden" 
          } mt-4 text-justify`}
        >
          {answer}
        </p>
      </div>
      
    </>
  );
};

export default SingleAccordian;
