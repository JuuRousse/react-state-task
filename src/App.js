import React from "react";
import style from "./App.module.css";
import { CircleColor } from "./tasks/CircleColor/CircleColor";
import { WeekDay } from "./tasks/WeekDay/WeekDay";
import { AgeDetector } from "./tasks/AgeDetector/AgeDetector";
import { RandomNumber } from "./tasks/RandomNumber/RandomNumber";
import { Links } from "./tasks/Links/Links";

const App = () => {
  return (
    <div className={style.app}>
      <Links />
      <CircleColor />
      <WeekDay />
      <AgeDetector />
      <RandomNumber />
    </div>
  );
};

export default App;
