import React from "react";
import style from "./ColumnContainer.module.css";

export const ColumnContainer = ({ children }) => {
  return <div className={style.column}>{children}</div>;
};
