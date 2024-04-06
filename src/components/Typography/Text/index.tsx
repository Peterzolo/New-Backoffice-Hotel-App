"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

interface TextProps {
  className?: string;
  children?: ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
  color?: string;
  fontSize?: string;
  letterSpacing?: string;
  textAlign?: string;
  padding?: string;
  fontWeight?: string;
  discounted?: boolean;
}

const StyledText = styled.p<TextProps>`
  border-radius: 5px;
  line-height: 1.5rem;
  padding: 10px;
  color: ${(props) => props.color || props.theme.textColor};
  text-align: ${(props) => props.fontSize || "left"};
  padding: ${(props) => props.padding || "10px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  letter-spacing: ${(props) => props.letterSpacing || "normal"};
  text-decoration: ${({ discounted }) =>
    discounted ? "line-through" : "none"};
`;

export const Text: React.FC<TextProps> = ({
  children,

  className,
  onClick,
  ...otherProps
}) => {
  let StyledComponent = StyledText;

  return (
    <StyledComponent
      className={`text ${className}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </StyledComponent>
  );
};
