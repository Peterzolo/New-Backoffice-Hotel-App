import React, { ReactNode } from "react";
import styled from "styled-components";

interface ReusableComponentProps {
  children: ReactNode;
  backgroundImage: string;
}

const StyledFixedBackground = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 255, 0.5);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  color: white;
  text-align: center;
`;

export const FixedBackground: React.FC<ReusableComponentProps> = ({
  children,
  backgroundImage,
}) => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <StyledFixedBackground style={backgroundStyles}>
      <Content>{children}</Content>
    </StyledFixedBackground>
  );
};
