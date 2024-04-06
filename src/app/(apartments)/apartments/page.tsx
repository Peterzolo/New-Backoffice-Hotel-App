"use client";

import { truncateText } from "@/app/helpers/truncate/truncateText";
import { Card } from "@/components/Card";
import { FixedBackgroundWithoutBgColor } from "@/components/FixedBackground2/FixedBackgroundWithoutBgColor";
import { Image } from "@/components/Image/Image";
import { Rating } from "@/components/Rating";
import { Text } from "@/components/Typography/Text";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Box } from "@/components/box/Box";
import { Button } from "@/components/button/Button";
import { Divider } from "@/components/divider/Divider";
import { HeaderContent } from "@/components/layout/HeaderContent/HeaderContent";
import { apartments } from "@/data/navLinks";
import Link from "next/link";

import React, { useState } from "react";
import styled from "styled-components";

const Apartments = () => {
  const [showAllFacilities, setShowAllFacilities] = useState(false);
  return (
    <MainWrapper>
      <TopHeader>
        <FixedBackgroundWithoutBgColor backgroundImage="/images/testimonial009.jpg">
          <HeaderContent
            title="APARTMENTS"
            description="We have an array of amazing comfortable and beautiful apartments that befits your desires"
            image="/images/nuspring-logo.png"
          />
        </FixedBackgroundWithoutBgColor>
      </TopHeader>

      {apartments &&
        apartments?.map((room) => (
          <MappedContents key={room.id}>
            <LeftContent>
              <Image src={room.img} alt={room.name} height="380px" />
            </LeftContent>
            <RightContent>
              <RightInnerLeft>
                <HeaderText as="h5">{room.name}</HeaderText>
                <RatingWrap>
                  <Rating value={room.rating} />
                </RatingWrap>
                <Description>{truncateText(room.description, 20)}</Description>{" "}
                <Divider />
                <FacilityTitle>Facilities Avalable</FacilityTitle>
                <MappedFacilityWrapper>
                  {room.facilities
                    .slice(0, showAllFacilities ? room.facilities.length : 5)
                    .map((facility, index) => (
                      <Facility key={index}>| {facility} | </Facility>
                    ))}
                  {!showAllFacilities && room.facilities.length > 5 && (
                    <Facility>
                      <Link
                        href={`/apartments/${room.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        View More...
                      </Link>
                    </Facility>
                  )}
                </MappedFacilityWrapper>
              </RightInnerLeft>
              <RightInnerRight>
                <InitialPrice>${room.initialPrice}</InitialPrice>
                <DiscountedPrice
                  discounted={room.discountedprice !== undefined}
                >
                  ${room.discountedprice}
                </DiscountedPrice>
                <Price>${room.price}</Price>
                <PerNight>Per/Night</PerNight>
                <Button type="primary">
                  <Link
                    href={`/apartments/${room.id}`}
                    style={{ textDecoration: "none", color: "#f5f5f5" }}
                  >
                    View Room Details
                  </Link>
                </Button>
              </RightInnerRight>
            </RightContent>
          </MappedContents>
        ))}
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  margin-top: 50px;
`;
const TopHeader = styled(Box)`
  height: 700px;
`;

const MappedContents = styled(Card)`
  flex-direction: row;
  width: 90%;
  gap: 10px;
  margin-top: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled(Box)`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

const RightContent = styled(Box)`
  flex-direction: row;
  width: 60%;
  gap: 10px;
  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const RightInnerLeft = styled(Box)`
  width: 60%;
  border: 0.5px dotted ${({ theme }) => theme.borderColor};
  height: 380px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

const RightInnerRight = styled(Box)`
  width: 40%;
  height: 380px;
  background-color: ${({ theme }) => theme.auxiliaryBgColor};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Name = styled(Text)`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const RatingWrap = styled(Box)`
  margin-top: -20px;
  @media (max-width: 768px) {
    margin-top: -30px;
  }
`;

const Description = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const MappedFacilityWrapper = styled(Box)`
  padding: 4px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FacilityTitle = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
    margin-top: 5px;
  }
`;

const Facility = styled(Text)`
  padding: 2px;
  flex-wrap: wrap;
  margin-top: -20px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: left;
  }
`;

const InitialPrice = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const DiscountedPrice = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: ${({ discounted }) =>
    discounted ? "line-through" : "none"};
`;

const Price = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
const PerNight = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
const ButtonText = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Apartments;
