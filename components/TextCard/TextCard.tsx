import React from "react";
import "./TextCard.css";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const TextCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={icon} alt="Icon" className="card-icon" />
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default TextCard;
