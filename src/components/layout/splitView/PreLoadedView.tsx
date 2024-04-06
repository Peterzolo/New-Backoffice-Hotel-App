import { FixedBackgroundWithoutBgColor } from "@/components/FixedBackground2/FixedBackgroundWithoutBgColor";
import React from "react";
import { HeaderContent } from "../HeaderContent/HeaderContent";
import { Card } from "@/components/Card";
import { Box } from "@/components/box/Box";
import { InnerImageCarousel } from "@/components/Carousel/InnerCarousel";

const images = [
  "/images/hotel001.png",
  "/images/hotel.jpg",
  "/images/testimonial007.jpg",
];

const captions = [
  {
    title: "First slide label",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    title: "Second slide label",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Third slide label",
    text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

export const PreLoadedView = () => {
  return (
    <Box>
      <InnerImageCarousel
        images={images}
        captions={captions}
        desktopWidth="100%"
        mobileWidth="350px"
        height="100%"
        interval={3000}
      />
    </Box>
  );
};
