import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import "./ResourcesCard.css";

interface ResourcesCardProps {
  sections: {
    header?: string;
    avatarIcon?: React.ReactNode;
    avatarName?: string;
    body?: string;
    footer?: {
      label: string;
      variant?: "solid" | "outline" | "ghost" | "subtle" | "surface" | "plain";
      icon?: React.ReactElement;
    }[];
  }[];
}

const ResourcesCard: React.FC<ResourcesCardProps> = ({ sections }) => {
  return (
    <Box borderRadius="md" p={4} bg="white" className="customCard">
      {/* Rendering the sections */}
      {sections.map((section, index) => (
        <Box key={index} className="card-section">
          {section.header && (
            <Flex alignItems="center" mb={4} className="header">
              {section.avatarIcon ? (
                <Avatar size="lg" mr={4} className="avatar" src="" name="">
                  {section.avatarIcon}
                </Avatar>
              ) : null}
              <Heading size="md" className="heading" whiteSpace="pre-line">
                {section.header}
              </Heading>
            </Flex>
          )}

          {section.body && (
            <Box mb={4} className="body">
              <Text>{section.body}</Text>
            </Box>
          )}

          {section.footer && (
            <Box mb={4} className="footer">
              {section.footer.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={btn.variant || "solid"}
                  className="button"
                >
                  {btn.icon && (
                    <span style={{ marginRight: "0.5rem" }}>{btn.icon}</span>
                  )}
                  <span className="button-label">{btn.label}</span>
                </Button>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ResourcesCard;
