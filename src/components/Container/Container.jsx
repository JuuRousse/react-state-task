import React from "react";
import style from "./Container.module.css";

export const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
