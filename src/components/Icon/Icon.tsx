// Icon.tsx

import React from "react";
import styled from "styled-components";
import { Box } from "../box/Box";
import icons from "@/assets/images";

interface IconProps {
  iconName: keyof typeof icons; // Use keyof typeof to get all keys of the icons object
  size?: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  iconName,
  size = "24px",
  color = "black",
  ...props
}) => {
  return (
    <MainWrap iconName={icons[iconName]} size={size} color={color} {...props} />
  );
};

const MainWrap = styled(Box)<{ iconName: string; size: string; color: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-image: url(${(props) => props.iconName});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  filter: brightness(0) invert(${(props) => props.color});
`;

export default Icon;
