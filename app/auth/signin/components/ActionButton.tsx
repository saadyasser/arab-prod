import React from "react";
import { Button } from "@/components/ui/button";

interface ActionButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  type,
  onClick,
  children,
  icon,
  className,
}) => (
  <Button type={type} onClick={onClick} className={className}>
    {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
    {children}
  </Button>
);

export default ActionButton;
