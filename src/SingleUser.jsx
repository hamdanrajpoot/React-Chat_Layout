import React from "react";

const SingleUser = ({ login, avatar_url, followers_url }) => {
  return (
    <div className="p-5 rounded-md shadow-lg border border-gray-200 my-3">
      <img src={avatar_url} className="w-full" alt="" />
      <h4>{login}</h4>
      <a className="text-red-700 text-sm"  href={followers_url} target='_blank'>My Github</a>
      

      
    </div>
  );
};

export default SingleUser;
