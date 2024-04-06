import { Box } from "@/components/box/Box";
import React from "react";
import styled from "styled-components";

interface HeaderContentProps {
  title: string;
  description: string;
  image: string;
}

export const HeaderContent: React.FC<HeaderContentProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <MainWrapper>
      <LeftContent>
        <Image src={image} alt="Header Image" />
      </LeftContent>
      <RightContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </RightContent>
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: -30px;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.iconColor};
`;

const LeftContent = styled(Box)``;

const RightContent = styled(Box)``;

const Description = styled.p`
  font-weight: 600;
  font-size: 18px;
  background-color: ${({ theme }) => theme.pageBackground};
  padding: 10px;
  border-radius: 10px;
  @media (max-width: 768px) {
    text-align: justify;
    font-size: 16px;
  }
`;
