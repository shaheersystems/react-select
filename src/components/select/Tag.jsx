import React from "react";

function Tag({ icon }) {
  return (
    <div className='p-1 rounded-full rouned bg-indigo-200 text-indigo-600'>
      {icon}
    </div>
  );
}

export default Tag;
