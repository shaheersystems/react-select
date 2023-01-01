import React, { useState, useEffect, useRef } from "react";
import Selected from "./Selected";
import SelectItem from "./SelectItem";
import data from "../../data/data";

function Select() {
  const [selected, setSelected] = useState(data[0].id);
  const [isOpened, setOpened] = useState(false);
  const selectUser = data.filter((user) => {
    return user.id === selected;
  });
  const handle = (id) => {
    setSelected(id);
    setOpened(false);
  };

  return (
    <div className='relative'>
      {selectUser.map((user) => {
        return (
          <Selected
            key={user.id}
            name={user.name}
            avatar={user.avatar}
            isOpened={isOpened}
            setOpened={setOpened}
          />
        );
      })}
      <div
        className={`${
          !isOpened ? "hidden" : ""
        } border overflow-auto transition-all shaded w-80 p-1 shadow absolute top-12 h-64 rounded`}
      >
        {data.map((user) => {
          return (
            <SelectItem
              key={user.id}
              avatar={user.avatar}
              name={user.name}
              isSelected={user.id === selected ? true : false}
              onClick={() => handle(user.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Select;
