import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { Image } from "../Image/Image";
import { CarouselDataProps } from "@/constant/types";
import Box from "@mui/material/Box/Box";
import { Text } from "../Typography/Text";
import { Button } from "../button/Button";
import Logo from "../../assets/images/nuspring-logo.png";

export const CarouselContainer: React.FC<CarouselDataProps> = ({ data }) => {
  return (
    <CarouselWrapper>
      <Carousel controls={false} fade={true}>
        {data.map((item, index) => (
          <Carousel.Item key={index} interval={2000}>
            <CarouselContent>
              <Image
                src={item.image}
                alt={item.title}
                width="100%"
                height="900px"
              />
              <CenteredContent>
                <DetailsWrap>
                  <DetailImage
                    src={Logo}
                    alt="logo"
                    width="150px"
                    height="150px"
                  />
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                  <ButtonWrap type="primary" width="200px">
                    Book Now
                  </ButtonWrap>
                </DetailsWrap>
              </CenteredContent>
            </CarouselContent>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 5px;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    margin-top: -70px;
  }
`;

const CarouselContent = styled.div`
  position: relative;
`;

const CenteredContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DetailsWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const DetailImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-bottom: -10px;
  }
`;

const Title = styled(Text)`
  font-size: 6rem;
  font-family: "Raleway", sans-serif;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  white-space: nowrap;
  letter-spacing: 3px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: -5px;
  }
`;

const Description = styled(Text)`
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.pageBackground};
  color: ${({ theme }) => theme.textColor};
  white-space: nowrap;
  letter-spacing: 3px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    word-break: break-word;
    width: 100%;
  }
`;

const ButtonWrap = styled(Button)`
  @media (max-width: 768px) {
    font-size: 0.6rem;
    word-break: break-word;
    height: 35px;
  }
`;
