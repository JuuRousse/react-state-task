import React, { useState } from "react";
import style from "./WeekDay.module.css";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Container/Title";

const weekList = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};

export const WeekDay = () => {
  const [week, setWeek] = useState("-||-");

  const handleClick = (event) => {
    const weekDayName = weekList[event.target.innerHTML];

    setWeek(weekDayName);
  };

  return (
    <Container>
      <Title text="Full name of days of the week" id="full-name-week" />
      <div className={style.row}>
        <div className={style.item}>
          <button onClick={handleClick} className={style.button}>
            Mo
          </button>
        </div>
        <div className={style.item}>
          <button onClick={handleClick} className={style.button}>
            Tu
          </button>
        </div>
        <div className={style.item}>
          <button onClick={handleClick} className={style.button}>
            We
          </button>
        </div>
        <div className={style.item}>
          <button onClick={handleClick} className={style.button}>
            Th
          </button>
        </div>
        <div className={style.item}>
          <button onClick={handleClick} className={style.button}>
            Fr
          </button>
        </div>
        <div className={style.item}>
          <button onClick={handleClick} className={style.button}>
            Sa
          </button>
        </div>
        <div className={style.item}>
          <button onClick={handleClick} className={style.button}>
            Su
          </button>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.rectangle}>{week}</div>
      </div>
    </Container>
  );
};
