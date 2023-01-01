import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import Tag from "./Tag";
function SelectItem({ isSelected, avatar, name, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`transition-all w-full h-10 flex items-center justify-between cursor-pointer p-2 rounded   ${
        isSelected
          ? "hover:bg-indigo-200"
          : "hover:bg-indigo-600 hover:text-white"
      }`}
    >
      <div className='flex items-center gap-4'>
        <img src={avatar} alt={name} className='h-7 w-7 rounded-full' />
        <p className={isSelected ? "font-semibold" : ""}>{name}</p>
      </div>
      <div>{isSelected ? <Tag icon={<CheckIcon />} /> : ""}</div>
    </div>
  );
}

export default SelectItem;
