import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    if (e.target.innerHTML == "Increase") {
      setCount(count + 1);
    } else if (e.target.innerHTML == "Reset") {
      setCount(0);
    } else {
      if (count > 
        
        
        0){
         setCount(count - 1);
      }else{
        setCount(0)
      }
     
    }
  };

  return (
    <>
      <div className="container mx-auto text-center">
        <h1
          className={`text-9xl ${
            count > 0
              ? "text-red-500"
              : count < 0
              ? "text-purple-500"
              : "text-yellow-500"
          }`}
        >
          {count}
        </h1>
        <button
          onClick={handleCount}
          className="bg-gradient-to-bl text-white mx-2 from-red-500 via-rose-600 to-pink-600 px-4 py-2 rounded-md hover:bg-gradient-to-tl cursor-pointer active:scale-95 transition-all duration-100"
        >
          Decrease
        </button>

        <button
          onClick={handleCount}
          className="bg-gradient-to-bl mx-2 text-white from-orange-700  to-yellow-600 px-4 py-2 rounded-md hover:bg-gradient-to-tl cursor-pointer active:scale-95 transition-all duration-100"
        >
          Reset
        </button>

        <button
          onClick={handleCount}
          className="bg-gradient-to-bl mx-2 text-white from-blue-700  to-pink-600 px-4 py-2 rounded-md hover:bg-gradient-to-tl cursor-pointer active:scale-95 transition-all duration-100"
        >
          Increase
        </button>
      </div>
    </>
  );
};

export default Counter;
