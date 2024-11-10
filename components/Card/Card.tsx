import React, { FC, ReactNode } from "react";
import "./Card.css";

interface CardType {
  clasName?: string;
  children: ReactNode;
}
export const Card: FC<CardType> = ({ children, clasName = "" }) => {
  return <div className={`card ${clasName}`}>{children}</div>;
};

export default Card;
