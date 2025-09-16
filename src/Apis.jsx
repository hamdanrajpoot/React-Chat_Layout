import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import { PacmanLoader, RingLoader } from "react-spinners";

const Apis = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://api.github.com/users";

  const getData = async () => {
    setLoading(true);
    let data = await fetch(url);
    let myUsers = await data.json();
    setUsers(myUsers);

    // ✅ Delay hiding loader (e.g. 2 seconds)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <RingLoader color="red" size={100} />
      </div>
  
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl mb-6">User Data</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {users?.map((item, index) => (
          <SingleUser {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Apis;
