import React, { useState } from "react";
import style from "./AgeDetector.module.css";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Container/Title";
import { ColumnsContainer } from "../../components/Container/ColumnsContainer";
import { ColumnContainer } from "../../components/Container/ColumnContainer";

const START_DATE = 1900;

export const AgeDetector = () => {
  const [yearOfBirth, setYearOfBirth] = useState(0);

  const todayDate = new Date();

  const currentYear = todayDate.getFullYear();

  const yearsAmount = currentYear - START_DATE + 1;

  const years = Array.from(Array(yearsAmount)).map((item, i) => {
    return START_DATE + i;
  });

  const handleChange = (event) => {
    setYearOfBirth(Number(event.target.value));
  };

  return (
    <Container>
      <Title text="Age detector" id="age-detector" />
      <ColumnsContainer>
        <ColumnContainer>
          <div className={style.column}>
            <h2 className={style.titleColumn}>Choose your year:</h2>
            <select onChange={handleChange} className={style.button}>
              {years.map((year, i) => {
                return <option value={year}>{year}</option>;
              })}
            </select>
          </div>
        </ColumnContainer>
        <ColumnContainer>
          {yearOfBirth ? (
            <div className={style.ageOfBirth}>
              You are {currentYear - yearOfBirth} y.o.
            </div>
          ) : (
            <span className={style.span}>Hello, friend!</span>
          )}
        </ColumnContainer>
      </ColumnsContainer>
    </Container>
  );
};
