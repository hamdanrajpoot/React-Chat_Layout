import React, { useEffect, useState } from "react";

const EffectRev = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("ran");
  }, [count]);

  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="text-9xl">{count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-red-500 rounded-full my-5 px-10 text-white hover:bg-red-700 cursor-pointer active:scale-95 py-2"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default EffectRev;
