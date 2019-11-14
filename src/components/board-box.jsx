import React from "react";

//Create the Box Component

const Box = props => {
  return (
    <div>
      <button className="board__box" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Box;
