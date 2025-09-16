import React, { useState } from 'react'
import SingleReview from './SingleReview'
import { IoMdArrowDropdown } from 'react-icons/io'

const SingleProduct = ({images,title,price,rating,reviews}) => {
const[open,setOpen] = useState(false)
  return (
    <>
      <div className="p-5 w-[30%] self-start flex flex-col justify-between shadow-xl rounded-md my-3">
        <img src={images[0]} className="w-full" alt="" />
        <h4 className="text-gray-500 fw-semibold">{title}</h4>
        <h4 className="text-blue-500">${price}</h4>
        {[...Array(Math.round(rating))].map((_, index) => {
          return "⭐";
        })}
        <IoMdArrowDropdown
          onClick={() => setOpen(!open)}
          className="text-2xl cursor-pointer"
        />

        <div className={`${open ? "h-[250px]" : "h-0"} overflow-hidden`}>
          {reviews?.map((item, index) => {
            return <SingleReview {...item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default SingleProduct
