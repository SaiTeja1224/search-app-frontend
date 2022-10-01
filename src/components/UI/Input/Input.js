import React from "react";

import "./Input.css";

export default function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      ref={props.inputRef}
      className={props.cName}
      autoComplete="off"
      onInput={props.inputHandler}
    />
  );
}
