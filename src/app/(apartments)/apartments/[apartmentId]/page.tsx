"use client";

import { InnerImageCarousel } from "@/components/Carousel/InnerCarousel";
import { FixedBackground } from "@/components/FixedBackground/FixedBackground";
import { Text } from "@/components/Typography/Text";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Box } from "@/components/box/Box";
import { EditSearch } from "@/components/common/SearchAndEditForm";
import { Divider } from "@/components/divider/Divider";
import styled from "styled-components";
import PortableWifiOffIcon from "@mui/icons-material/PortableWifiOff";
import PoolIcon from "@mui/icons-material/Pool";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import { Card } from "@/components/Card";
import { useState } from "react";

interface ApartmentPageProps {
  params: {
    apartmentId: string;
  };
}

const rating = 4.5;
const price = 1500;
const name = "New Beautiful Apartment";

export default function ApartmentPage({ params }: ApartmentPageProps) {
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

  const [isLoading, setIsLoading] = useState(true);

  const id = params.apartmentId;

  return (
    <MainWrapper>
      <FixedBackground backgroundImage="/images/hotel001.png">
        <SlideContentWrapper>
          <Text>Room ID:{params.apartmentId}</Text>
        </SlideContentWrapper>
      </FixedBackground>

      <MainContentWrapper>
        <TopContentWrapper>
          <LeftTopContent>
            <CaraouselWrapper>
              <InnerImageCarousel
                images={images}
                captions={captions}
                desktopWidth="100%"
                mobileWidth="350px"
                height="100%"
                interval={3000}
              />
            </CaraouselWrapper>
            <FacilitiesWrapper>
              <IconWrap>
                <PortableWifiOffIcon
                  style={{ fontSize: 50, marginTop: "20px" }}
                />
                <Text>Internet Service</Text>
              </IconWrap>
              <IconWrap>
                <PoolIcon style={{ fontSize: 50, marginTop: "20px" }} />
                <Text>Swimming Pool</Text>
              </IconWrap>
              <IconWrap>
                <LocalTaxiIcon style={{ fontSize: 50, marginTop: "20px" }} />
                <Text>Cap Services</Text>
              </IconWrap>
              <IconWrap>
                <SportsGymnasticsIcon
                  style={{ fontSize: 50, marginTop: "20px" }}
                />
                <Text>Gymnastics</Text>
              </IconWrap>
              <IconWrap>
                <DryCleaningIcon style={{ fontSize: 50, marginTop: "20px" }} />
                <Text>Laundary services</Text>
              </IconWrap>
            </FacilitiesWrapper>
          </LeftTopContent>

          <RightTopContent>
            <EditSearch rating={rating} price={price} name={name} id={id} />
          </RightTopContent>
        </TopContentWrapper>
        <Divider />

        <DescriptionWrapper>
          <LongDescWrap>
            <HeaderText as="h1">Long Description</HeaderText>
            <LogDesc>
              Nestled in the heart of the city, this elegant apartment offers a
              harmonious blend of modern comfort and timeless charm. With
              spacious interiors bathed in natural light, it features a stylish
              living area perfect for relaxation, a fully equipped kitchen for
              culinary adventures, and a cozy bedroom for tranquil nights. Enjoy
              breathtaking views of the city skyline from the private balcony,
              or take a leisurely stroll to nearby cafes and boutiques. Your
              urban oasis awaits.
            </LogDesc>
          </LongDescWrap>
          <ShortDescWrap>
            <HeaderText as="h1">Short Description</HeaderText>
            <ShortDesc>
              Chic urban retreat with stunning views, modern comforts, and
              vibrant city access. Your perfect getaway awaits in this stylish
              apartment
            </ShortDesc>
          </ShortDescWrap>
        </DescriptionWrapper>

        <RoomOverview>
          <Box>
            <HeaderText as="h3">Apartment Overview</HeaderText>
          </Box>
          <Box>
            <Text textAlign="justify">
              An apartment is a self-contained living unit within a larger
              building or complex. It usually comprises one or more rooms for
              living, cooking, and sleeping, along with a bathroom. Apartments
              vary in size and layout, providing residents with privacy and
              amenities while sharing common areas such as hallways and
              entrances.
            </Text>
          </Box>

          <Box>
            <ItemWrapperOne>
              <Title>
                <HeaderText as="h5">Bed</HeaderText>
              </Title>
              <Desc>
                <Text>Kings Size</Text>
              </Desc>
            </ItemWrapperOne>

            <ItemWrapperTwo>
              {" "}
              <Title>
                <HeaderText as="h5">Nos. of Adult</HeaderText>
              </Title>
              <Desc>
                <Text>2</Text>
              </Desc>
            </ItemWrapperTwo>
            <ItemWrapperOne>
              <Title>
                <HeaderText as="h5">Nos. of Children</HeaderText>
              </Title>
              <Desc>
                <Text>1-3</Text>
              </Desc>
            </ItemWrapperOne>

            <ItemWrapperTwo>
              {" "}
              <Title>
                <HeaderText as="h5">Taxi Availability</HeaderText>
              </Title>
              <Desc>
                <Text>Yes</Text>
              </Desc>
            </ItemWrapperTwo>
            <ItemWrapperOne>
              <Title>
                <HeaderText as="h5">High Speed Internet</HeaderText>
              </Title>
              <Desc>
                <Text>Yes [Free]</Text>
              </Desc>
            </ItemWrapperOne>

            <ItemWrapperTwo>
              {" "}
              <Title>
                <HeaderText as="h5">Security</HeaderText>
              </Title>
              <Desc>
                <Text>Maximum</Text>
              </Desc>
            </ItemWrapperTwo>
            <ItemWrapperOne>
              <Title>
                <HeaderText as="h5">Gymn Access</HeaderText>
              </Title>
              <Desc>
                <Text>24/7</Text>
              </Desc>
            </ItemWrapperOne>

            <ItemWrapperTwo>
              {" "}
              <Title>
                <HeaderText as="h5">BreakFast</HeaderText>
              </Title>
              <Desc>
                <Text>Included</Text>
              </Desc>
            </ItemWrapperTwo>
            <ItemWrapperOne>
              <Title>
                <HeaderText as="h5">All Rooms Ensuite</HeaderText>
              </Title>
              <Desc>
                <Text>Yes</Text>
              </Desc>
            </ItemWrapperOne>

            <ItemWrapperTwo>
              {" "}
              <Title>
                <HeaderText as="h5">Swimming Pool</HeaderText>
              </Title>
              <Desc>
                <Text>Yes</Text>
              </Desc>
            </ItemWrapperTwo>
          </Box>
        </RoomOverview>
      </MainContentWrapper>
    </MainWrapper>
  );
}

const Footer = styled(Box)`
  background-color: green;
  color: white;
`;

const MainWrapper = styled(Box)`
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const SlideContentWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContentWrapper = styled(Box)`
  margin-top: 100px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TopContentWrapper = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftTopContent = styled(Box)`
  flex: 1;
`;

const CaraouselWrapper = styled(Box)`
  padding: 5px;
`;

const FacilitiesWrapper = styled(Box)`
  flex-direction: row;
  width: 100;
  gap: 5px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: -120px;
  }
`;

const IconWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100px;
  border: 1px dashed lightgray;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const RightTopContent = styled(Card)`
  flex: 1;
  height: 100%;
  @media (max-width: 768px) {
    width: 350px;
    margin-top: 80px;
    align-items: center;
  }
`;

const DescriptionWrapper = styled(Box)`
  max-width: 1500px;
  width: 100%;
  flex-direction: row;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 7px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 350px;
    padding: 10px;
    /* margin-top: 350px; */
  }
`;

const LongDescWrap = styled(Box)`
  width: 60%;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 350px;
  }
`;

const ShortDescWrap = styled(Box)`
  width: 40%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 350px;
  }
`;
const LogDesc = styled(Text)`
  text-align: left;
  @media (max-width: 768px) {
    text-align: justify;
  }
`;
const ShortDesc = styled(Text)`
  text-align: left;
  @media (max-width: 768px) {
    text-align: justify;
  }
`;

const RoomOverview = styled(Box)`
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    width: 400px;
  }
`;

const ItemWrapperOne = styled(Box)`
  background-color: ${({ theme }) => theme.auxiliaryBgColor};
  flex-direction: row;
  padding: 2px;
  max-width: 900px;
  width: 100%;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ItemWrapperTwo = styled(Box)`
  background-color: ${({ theme }) => theme.auxiliaryBgColorTwo};
  flex-direction: row;
  padding: 2px;
  max-width: 900px;
  width: 100%;
`;

const Title = styled(Box)`
  @media (max-width: 768px) {
    text-align: justify;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
`;

const Desc = styled(Box)``;
// const RoomOverview = styled(Box)``
