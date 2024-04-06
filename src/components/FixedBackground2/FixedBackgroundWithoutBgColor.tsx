import React, { ReactNode } from "react";
import styled from "styled-components";

interface FixedBgWithNoLayerProps {
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
  }
`;

const Content = styled.div`
  margin-top: 50px;
  position: relative;
  z-index: 1;
  padding: 20px;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
`;

export const FixedBackgroundWithoutBgColor: React.FC<
  FixedBgWithNoLayerProps
> = ({ children, backgroundImage }) => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <StyledFixedBackground style={backgroundStyles}>
      <Content>{children}</Content>
    </StyledFixedBackground>
  );
};
