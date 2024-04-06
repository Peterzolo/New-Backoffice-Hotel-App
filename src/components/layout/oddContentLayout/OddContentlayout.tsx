import React from "react";
import { Box } from "@/components/box/Box";
import styled from "styled-components";

interface IOddContentProps {
  width?: string;
  height?: string;
  children?: React.ReactNode[];
  display?: string;
  padding?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  gap?: string;
  onClick?: () => void;
}

const BaseContent = styled.div<IOddContentProps>`
  border-radius: 4px;
  margin: ${(props) => props.margin || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  padding: ${(props) => props.padding || "0px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || "5px"};
  justify-content: ${(props) => props.justifyContent || "center"};
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const LeftPartition = styled.div`
  flex: 1;
`;

const RightPartition = styled.div`
  flex: 2;
`;

export const ContentLayoutPageContent: React.FC<IOddContentProps> = ({
  children,
  ...rest
}) => {
  return (
    <BaseContent {...rest}>
      <LeftPartition>{children?.[0]}</LeftPartition>
      <RightPartition>{children?.[1]}</RightPartition>
    </BaseContent>
  );
};
