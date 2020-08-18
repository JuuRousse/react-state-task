import React from "react";
import style from "./Links.module.css";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Container/Title";
import { ReactComponent as ArrowUpIcon } from "../../icons/arrow-up.svg";

export const Links = () => {
  return (
    <Container>
      <Title text="Tasks:" id="arrow-up" />
      <ol className={style.list}>
        <li className={style.linkItem}>
          <a href="#circle-color" className={style.link}>
            Change color of the circle
          </a>
        </li>
        <li className={style.linkItem}>
          <a href="#age-detector" className={style.link}>
            Age detector
          </a>
        </li>
        <li className={style.linkItem}>
          <a href="#random-number" className={style.link}>
            Random number generator
          </a>
        </li>
        <li className={style.linkItem}>
          <a href="#full-name-week" className={style.link}>
            Full name of days of the week
          </a>
        </li>
      </ol>

      <a href="#arrow-up" className={`${style.link} ${style.arrowUp}`}>
        <ArrowUpIcon width="15" fill="#ffffff" />
      </a>
    </Container>
  );
};
