import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "../Image/Image";

interface CarouselProps {
  images: string[];
  captions: { title: string; text: string }[];
  interval?: number;
  height?: string;
  desktopWidth?: string;
  mobileWidth?: string;
}

const StyledImage = styled.img`
  width: 100%;
`;

export const InnerImageCarousel: React.FC<CarouselProps> = ({
  images,
  captions,
  interval = 1000,
  desktopWidth = "900px",
  mobileWidth = "400px",
}) => {
  return (
    <CarouselWrapper desktopWidth={desktopWidth} mobileWidth={mobileWidth}>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={interval}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={desktopWidth} // Adjust width based on desktopWidth prop
              height="500px"
            />
            <Carousel.Caption>
              <h3>{captions[index].title}</h3>
              <p>{captions[index].text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

interface WrapperProps {
  desktopWidth?: string;
  mobileWidth?: string;
}

const CarouselWrapper = styled.div<WrapperProps>`
  width: ${(props) => props.desktopWidth};

  @media (max-width: 768px) {
    width: ${(props) => props.mobileWidth};
    height: 400px;
  }
`;
