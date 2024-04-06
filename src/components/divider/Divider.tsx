import React from "react";
import styled from "styled-components";

interface DividerProps {
  color?: string;
  height?: string;
}

export const Divider: React.FC<DividerProps> = ({
  color = "#ccc",
  height = "1px",
}) => {
  return <DividerLine color={color} height={height} />;
};

const DividerLine = styled.div<DividerProps>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  @media (max-width: 768px) {
    display: none;
  }
`;
