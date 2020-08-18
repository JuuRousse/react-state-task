import React from "react";
import style from "./Title.module.css";

export const Title = (props) => {
  return (
    <h1 className={style.title} id={props.id}>
      {props.text}
    </h1>
  );
};
