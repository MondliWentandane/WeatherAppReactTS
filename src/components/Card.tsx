import React from "react";
import "../App.css"

interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div id="card">{children}</div>;
};

export default Card;