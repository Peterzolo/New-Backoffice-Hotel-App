import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Text } from "../Typography/Text";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  items: { label: string; onClick: () => void }[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <DropdownWrapper isVisible={isVisible}>
      <DropdownMenu>
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            onClick={() => {
              item.onClick();
              handleClose();
            }}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownWrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

const DropdownWrapper = styled.div<{ isVisible: boolean }>`
  position: relative;
  z-index: 100;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const DropdownMenu = styled.ul`
  position: absolute;
  list-style: none;
  top: 0;
  right: -30px;
  padding: 0;
  margin: 0;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease;
  &:hover {
    background-color: #f1f1f1;
  }
`;
