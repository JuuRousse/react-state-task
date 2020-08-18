import React from "react";
import style from "./ColumnsContainer.module.css";

export const ColumnsContainer = ({ children }) => {
  return <div className={style.columns}>{children}</div>;
};
