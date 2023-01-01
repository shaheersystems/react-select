import React, { useState } from "react";
import data from "../../data/data";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
function Selected({ isOpened, setOpened, name, avatar }) {
  return (
    <div
      onClick={() => setOpened((prev) => !prev)}
      className={`p-2 border-2 flex items-center justify-between cursor-pointer w-80 rounded h-10 ${
        isOpened ? "border-indigo-800" : ""
      }`}
    >
      <div className='flex items-center gap-3 text-gray-800'>
        <img className='h-7 w-7 rounded-full' src={avatar} alt='' />
        <p>{name}</p>
      </div>
      <div>{isOpened ? <ChevronDownIcon /> : <ChevronUpIcon />}</div>
    </div>
  );
}

export default Selected;
