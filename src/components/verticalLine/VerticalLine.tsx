import React from "react";
import styled from "styled-components";

// Styled component for the vertical line
const VerticalLineWrapper = styled.div`
  height: 200px;
  width: 2px; /* You can adjust the width as needed */
  background-color: #949494; /* You can adjust the color as needed */
  @media (max-width: 769px) {
    height: 2px;
    width: 200px;
  }
`;

// Reusable vertical line component
export const VerticalLine = () => {
  return <VerticalLineWrapper />;
};
