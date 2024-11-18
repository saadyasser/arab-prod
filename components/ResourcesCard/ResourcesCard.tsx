import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Avatar } from "@/components/ui/avatar";
import './ResourcesCard.css';

// Define the prop types for the card component
interface ResourcesCardProps {
  sections: {
    header?: string;
    avatarSrc?: string;
    avatarIcon?: React.ReactNode;
    avatarName?: string;
    body?: string;
    footer?: {
      label: string;
      variant?: 'solid' | 'outline' | 'ghost' | 'subtle' | 'surface' | 'plain';
      icon?: React.ReactElement; // Use React.ReactElement instead of React.ElementType
    }[];
  }[];
  currentIndex: number;
  cardsPerView: number;
}

const ResourcesCard: React.FC<ResourcesCardProps> = ({ sections, currentIndex, cardsPerView }) => {
  const displaySections = sections.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      p={4}
      bg="white"
      className="customCard"
    >
      {displaySections.map((section, index) => (
        <Box key={index} className="card-section">
          {/* Header with Avatar */}
          {section.header && (
            <Flex alignItems="center" mb={4} className="header">
              {/* Display Avatar with either an image URL or SVG Icon */}
              {section.avatarIcon ? (
                <Avatar
                  size="lg"
                  mr={4}
                  className="avatar"
                  src="" // Empty src to prevent fallback image
                  name=""
                >
                  {section.avatarIcon}
                </Avatar>
              ) : null}
              
              {/* Title */}
              <Heading size="md" className="heading" whiteSpace="pre-line">{section.header}</Heading>
            </Flex>
          )}

          {/* Body */}
          {section.body && (
            <Box mb={4} className="body">
              <Text>{section.body}</Text>
            </Box>
          )}

          {/* Footer */}
          {section.footer && (
            <Flex justifyContent="center" gap={2} className="footer">
              {section.footer.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={btn.variant || 'solid'}
                  className="button"
                >
                  {/* Render the icon if it exists */}
                  {btn.icon && <span style={{ marginRight: '0.5rem' }}>{btn.icon}</span>}
                  <span className="button-label">{btn.label}</span>
                </Button>
              ))}
            </Flex>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ResourcesCard;
