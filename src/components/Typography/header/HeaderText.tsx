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
  fontWeight?: string;
  discounted?: boolean;
  textDecoration?: string;
  margin?: string;
  padding?: string;
  marginTop?: string;
  marginBottom?: string;
  marginleft?: string;
  marginRight?: string;
  as?: keyof JSX.IntrinsicElements;
}

const StyledText = styled.div<TextProps>`
  text-align: ${(props) => props.textAlign || "left"};
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginleft || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
  line-height: 1.5rem;
  color: ${({ theme }) => theme.headerTextColor};
  text-decoration: ${(props) => props.textDecoration || "none"};
  padding: ${(props) => props.padding || "0px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  letter-spacing: ${(props) => props.letterSpacing || "normal"};
  font-size: ${(props) => props.fontSize || "18"};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeaderText: React.FC<TextProps> = ({
  children,
  className,
  onClick,
  as = "h1",
  ...otherProps
}) => {
  const Component = as;

  return (
    <StyledText
      as={Component}
      className={`text ${className}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </StyledText>
  );
};
