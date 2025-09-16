import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import SingleAccordian from './SingleAccordian';
import { faqs } from './data';

const Accordians = () => {
  return (
    <>
    {faqs.map((item,index) => {
        return <SingleAccordian {...item} key={index}/>
    })}
    
    </>
  );
}

export default Accordians
