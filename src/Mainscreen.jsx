import React from "react";
import { RiChatSmile2Line } from "react-icons/ri";
import Card from "./Card";
import { chats } from "./chats";
const Mainscreen = () => {
  return (
    <>
      <div className="container overflow-hidden shadow-2xl xl:w-[25%] lg:w-[35%] md:w-[50%] w-[90%]   mx-auto mt-5 rounded-md">
        <div className="flex p-5 bg-green-500">
          <div className="flex gap-3 ">
            <RiChatSmile2Line size={57} color="white" />
            <div className="">
              <h2 className="text-xl font-semibold ">Start a Conversation</h2>
              <p className="text-white mt-1">
                Hi...! Click on of our member below to chat on{" "}
                <b className="text-blue-300">Watsapp</b>
              </p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-gray-500">
            The team typically replies in a few minutes
          </p>
          {chats.map((item, index) => {
            return <Card {...item} />
          })}
        </div>
      </div>
    </>
  );
};

export default Mainscreen;
