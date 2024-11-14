import React from "react";
import "./TextCard.css";

interface CardProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const TextCard: React.FC<CardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="card-text">
      <div className="card-header">
        <Icon className="card-icon" width={24} height={24} />
        <h3 className="card-text-title">{title}</h3>
      </div>
      <p className="card-text-description">{description}</p>
    </div>
  );
};

export default TextCard;
