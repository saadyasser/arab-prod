"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import Carousel from "../Carousel/Carousel"; // Import the updated Carousel component
import ResourcesCard from "../ResourcesCard/ResourcesCard";
import BookIcon from "../Svgs/BookIcon/BookIcon";
import TestQuizIcon from "../Svgs/TestQuizIcon/TestQuizIcon";
import KisspngEducationIcon from "../Svgs/KisspndEducationIcon/KisspngEducationIcon";
import MoreIcon from "../Svgs/MoreIcon/MoreIcon";

const cardData = [
  {
    sections: [
      {
        header: "دروس وانماط \nالميدجورني",
        avatarIcon: <BookIcon />,
        avatarName: "Avatar 1",
        footer: [{ label: "المزيد...", variant: "solid", icon: <MoreIcon /> }],
      },
      {
        header: "بنك الأسئلة \n التقنية",
        avatarIcon: <TestQuizIcon />,
        avatarName: "Avatar 2",
        footer: [{ label: "المزيد...", variant: "solid", icon: <MoreIcon /> }],
      },
      {
        header: "قاموس المصطلحات \nالتقنية",
        avatarIcon: <KisspngEducationIcon />,
        avatarName: "Avatar 3",
        footer: [{ label: "المزيد...", variant: "solid", icon: <MoreIcon /> }],
      },
      {
        header: "قاموس المصطلحات \nالتقنية",
        avatarIcon: <KisspngEducationIcon />,
        avatarName: "Avatar 3",
        footer: [{ label: "المزيد...", variant: "solid", icon: <MoreIcon /> }],
      },
      {
        header: "قاموس المصطلحات \nالتقنية",
        avatarIcon: <KisspngEducationIcon />,
        avatarName: "Avatar 3",
        footer: [{ label: "المزيد...", variant: "solid", icon: <MoreIcon /> }],
      },
      {
        header: "قاموس المصطلحات \nالتقنية",
        avatarIcon: <KisspngEducationIcon />,
        avatarName: "Avatar 3",
        footer: [{ label: "المزيد...", variant: "solid", icon: <MoreIcon /> }],
      },
    ],
  },
];

const CardCarousel: React.FC = () => {
  return (
    <Box className="carousel-container">
      {/* The Carousel component with cardsPerView set to 3 to show 3 cards at once */}
      <Carousel columns={3}>
        {cardData[0].sections.map((section, index) => (
          <ResourcesCard
            key={index}
            sections={[section]}
            currentIndex={0}
            cardsPerView={1}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default CardCarousel;
