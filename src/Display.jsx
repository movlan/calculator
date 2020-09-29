import React from "react";

export const Display = (props) => {
  console.log(props);
  return (
    <div className="display" style={{ gridArea: props.name }}>
      {props.data.result !== ""
        ? props.data.result
        : props.data.second !== ""
        ? props.data.first + " " + props.data.operand + " " + props.data.second
        : props.data.operand !== ""
        ? props.data.first + " " + props.data.operand
        : props.data.first !== ""
        ? props.data.first
        : 0}
    </div>
  );
};
