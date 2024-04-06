import { Box } from "@/components/box/Box";
import React from "react";
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

interface SkeletonWrapperProps {
  width?: string;
  height?: string;
}

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({ width, height }) => {
  return (
    <MainWrapper>
      <SkeletonWrapper width={width} height={height} />
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  max-width: 1800px;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

const SkeletonWrapper = styled.div<SkeletonWrapperProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "16px"};
  border-radius: 4px;
  background-color: #f0f0f0;
  animation: ${loadingAnimation} 1.5s infinite ease-in-out;
`;
