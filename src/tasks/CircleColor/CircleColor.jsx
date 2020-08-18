import React, { useState } from "react";
import style from "./CircleColor.module.css";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Container/Title";
import { ColumnsContainer } from "../../components/Container/ColumnsContainer";
import { ColumnContainer } from "../../components/Container/ColumnContainer";
import { Button } from "./Button";

export const CircleColor = () => {
  const [color, setColor] = useState(null);

  const onClickRedButton = () => {
    setColor("circleRed");
  };

  const onClickBlueButton = () => {
    setColor("circleBlue");
  };

  const onClickGreenButton = () => {
    setColor("circleGreen");
  };

  const onClickResetButton = () => {
    setColor(null);
  };

  return (
    <Container>
      <Title
        text="Change color of the circle"
        className={style.title}
        id="circle-color"
      />
      <ColumnsContainer>
        <ColumnContainer>
          <div className={style.item}>
            <Button onClick={onClickRedButton} color="red" text="red" />
          </div>
          <div className={style.item}>
            <Button onClick={onClickBlueButton} color="blue" text="blue" />
          </div>
          <div className={style.item}>
            <Button onClick={onClickGreenButton} color="green" text="green" />
          </div>
          <div className={style.item}>
            <Button onClick={onClickResetButton} color="grey" text="reset" />
          </div>
        </ColumnContainer>
        <ColumnContainer>
          <div className={`${style.circle} ${style[color]}`}></div>
        </ColumnContainer>
      </ColumnsContainer>
    </Container>
  );
};
