import React, { ReactNode } from "react";
import styled from "styled-components";

interface BoxProps {
  className?: string;
  children?: ReactNode;
  display?: string;
  width?: string;
  height?: string;
  flexDirection?: string;
  padding?: string;
  alignItems?: string;
  justifyContent?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  gap?: string;
  onClick?: () => void;
}

const StyledBox = styled.div<BoxProps>`
  border-radius: 4px;
  margin: ${(props) => props.margin || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  padding: ${(props) => props.padding || "20px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || "5px"};
  justify-content: ${(props) => props.justifyContent || "center"};
  display: ${(props) => props.display || "flex"};

  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Box: React.FC<BoxProps> = ({
  children,
  display,
  className,
  width,
  flexDirection,
  marginTop,
  marginBottom,
  marginRight,
  padding,
  marginLeft,
  height,
  justifyContent,
  alignItems,
  margin,
  gap,
  onClick,
}) => {
  let StyledComponent = StyledBox;

  return (
    <StyledComponent
      className={`box ${className}`}
      display={display}
      width={width}
      flexDirection={flexDirection}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      padding={padding}
      marginLeft={marginLeft}
      height={height}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      gap={gap}
      onClick={onClick}
    >
      {children}
    </StyledComponent>
  );
};
