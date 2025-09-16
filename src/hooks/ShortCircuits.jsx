import React, { useState } from "react";

const ShortCircuits = () => {
  const [text, setText] = useState('0');

  let andOperator = text && "SALAM";
  let orOperator = text || "Kia Baat Hai";

  return (
    <>
      <h1 className="text-4xl text-center">{andOperator}</h1>
      <h1 className="text-4xl text-center">{orOperator}</h1>
    </>
  );
};

export default ShortCircuits;
