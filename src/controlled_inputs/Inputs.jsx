import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const Inputs = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const handleName = (e) => {
    e.preventDefault();

    if (!name) {
      setError(true);
    } else {
      setError(false);
      setName("");
      setData([...data, { name, id: Date.now() }]);
    }
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  useEffect(() => {
    if (name.length > 0) {
      setError(false);
    }
  }, [name]);

  const handleDelete = (id) => {
    let newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <>
      
      <div className="flex justify-end pr-10 mt-5">
        <h2 className="text-xl font-bold text-purple-700">
          Total Students: {data.length}
        </h2>
      </div>

      <div className="container mt-5 w-1/2 mx-auto">
        <form className="shadow-lg p-5">
          <label htmlFor="" className="text-gray-500">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full p-3 rounded-md outline-0 focus:border-purple-500 border border-gray-200"
          />
          {error && (
            <p className="text-red-500 font-semibold">Please enter the value</p>
          )}
          <button
            onClick={handleName}
            className="w-full text-white bg-purple-700 my-3 p-2 rounded cursor-pointer"
          >
            Add Data
          </button>
        </form>
      </div>

      <div className="container mt-5 mx-auto grid grid-cols-4 gap-3">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="p-5 flex items-center justify-between shadow-2xl rounded-md"
            >
              {item.name}
              <FaTrash
                onClick={() => handleDelete(item.id)}
                className="text-red-600 cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Inputs;
