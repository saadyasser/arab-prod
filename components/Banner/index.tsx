import React from "react";
import "./Banner.css";
interface BannerProps {
  title: string;
  startAt: string;
  endAt: string;
}
const Banner = ({ title, startAt, endAt }: BannerProps) => {
  const currentDate = new Date();

  const startDate = new Date(startAt);

  const endDate = new Date(endAt);

  const isVisible = currentDate >= startDate && currentDate <= endDate;

  return isVisible && <div className="banner">{title}</div>;
};

export default Banner;
