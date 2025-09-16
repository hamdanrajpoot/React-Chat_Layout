import React, { useState } from "react";

const State = () => {
  // let title = 'Salam from React'

  const [title, setTitle] = useState("Assalam-o-Alaikum");

  const changeTitle = () => {
    if (title == "Assalam-o-Alaikum") {
      setTitle("Wa Laikum Salam");
    } else {
      setTitle("Assalam-o-Alaikum");
    }
  };
  return (
    <>
      <div className="container mx-auto text-center p-4">
        <h1 className="text-6xl">{title}</h1>
        <button
          onClick={changeTitle}
          className="px-4 py-2 text-white my-4 rounded-md bg-rose-500 bg-gradient-to-bl from green-600 to-cyan-600 hover:bg-gradient-to-tl cursor-pointer active:scale-95"
        >
          Change Title
        </button>
      </div>
    </>
  );
};

export default State;
