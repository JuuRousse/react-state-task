import React, { useState } from "react";
import style from "./RandomNumber.module.css";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Container/Title";
import { ColumnsContainer } from "../../components/Container/ColumnsContainer";
import { ColumnContainer } from "../../components/Container/ColumnContainer";

export const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const handleClick = (event) => {
    setRandomNumber(Math.floor(Math.random() * 100000));
  };

  return (
    <Container>
      <Title text="Random number generator" id="random-number" />
      <ColumnsContainer>
        <ColumnContainer>
          <button onClick={handleClick} className={style.button}>
            Generate
          </button>
        </ColumnContainer>
        <ColumnContainer>
          <div className={style.randomNumber}>{randomNumber}</div>
        </ColumnContainer>
      </ColumnsContainer>
    </Container>
  );
};
