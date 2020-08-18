import React from "react";
import style from "./Button.module.css";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style.button} ${style[props.color]}`}
    >
      {props.text}
    </button>
  );
};
