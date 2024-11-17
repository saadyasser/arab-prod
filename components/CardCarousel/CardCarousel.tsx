"use client"
import React, { useState } from 'react';
import {
  AvatarIcon,
  Box,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import ResourcesCard from '../ResourcesCard/ResourcesCard';
import './CardCarousel.css';
import BookIcon from '../Svgs/BookIcon/BookIcon';
import TestQuizIcon from '../Svgs/TestQuizIcon/TestQuizIcon';
import KisspngEducationIcon from '../Svgs/KisspndEducationIcon/KisspngEducationIcon';

// Define data for carousel
const cardData = [
  {
    sections: [
      {
        header: 'دروس وانماط الميدجورني',
        avatarIcon: <BookIcon/>,
        avatarName: 'Avatar 1',
        footer: [{ label: 'المزيد...', variant: 'solid' }],
      },
      {
        header: 'بنك الأسئلة التقنية',
        avatarIcon: <TestQuizIcon/>,
        avatarName: 'Avatar 2',
        footer: [{ label: 'المزيد...', variant: 'solid' }],
      },
      {
        header: 'قاموس المصطلحات التقنية',
        avatarIcon: <KisspngEducationIcon/>,
        avatarName: 'Avatar 3',
        footer: [{ label: 'المزيد...', variant: 'solid' }],
      },
    ],
  },
];

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Control number of cards shown based on breakpoint (responsive behavior)
  const cardsPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

  // Handle the previous button click (carousel navigation)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData[0].sections.length - 1 : prevIndex - 1
    );
  };

  // Handle the next button click (carousel navigation)
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData[0].sections.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box className="carousel-container">
      <IconButton
        aria-label="Previous"
        // icon={<ArrowBackIcon />}
        onClick={handlePrev}
        className="carousel-arrow left-arrow"
        size="lg"
        variant="outline"
      />
      <ResourcesCard sections={cardData[0].sections} currentIndex={currentIndex} cardsPerView={cardsPerView} />
      <IconButton
        aria-label="Next"
        // icon={<ArrowForwardIcon />}
        onClick={handleNext}
        className="carousel-arrow right-arrow"
        size="lg"
        variant="outline"
      />
    </Box>
  );
};

export default CardCarousel;
