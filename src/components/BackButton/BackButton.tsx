import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box } from "../box/Box";
import { styled } from "styled-components";

interface BackButtonProps {
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <MainWrapper onClick={handleBackClick} flexDirection="row">
      <KeyboardBackspaceIcon /> Back
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 768px) {
    margin-top: -70px;
  }
`;
