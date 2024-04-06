import React from "react";
import styled from "styled-components";
import { StaticImageData } from "next/image";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string | { srcSet: string; sizes?: string } | StaticImageData;
  alt: string;
  width?: string;
  height?: string;
  color?: string;
}

const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "350px"};
  object-fit: cover;
  border-radius: 5px;
  filter: ${(props) => (props.color ? `brightness(${props.color})` : "none")};
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  color,
  ...rest
}) => {
  let imgSrc: string;
  let imgSrcSet: string | undefined;
  let imgSizes: string | undefined;

  if (typeof src === "string") {
    imgSrc = src;
  } else if ("srcSet" in src) {
    imgSrc = src.srcSet;
    imgSrcSet = src.srcSet;
    imgSizes = src.sizes;
  } else {
    imgSrc = src.src;
  }

  return (
    <StyledImage
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      color={color}
      srcSet={imgSrcSet}
      sizes={imgSizes}
      {...rest}
    />
  );
};
