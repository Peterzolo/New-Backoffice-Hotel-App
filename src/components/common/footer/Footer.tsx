import { Image } from "@/components/Image/Image";
import { Text } from "@/components/Typography/Text";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Box } from "@/components/box/Box";
import { Button } from "@/components/button/Button";
import { TextInput } from "@/components/input/TextInput";
import { VerticalLine } from "@/components/verticalLine/VerticalLine";
import { links } from "@/data/navLinks";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <MainWrapper>
      <LeftItems>
        <Logo src="/images/nuspring-logo.png" alt="logo" />

        <LeftText>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos Content here, content here, making
          it look like readable English. Many desktop publishing packages and
          web page editors now use Lorem Ipsum as their
        </LeftText>
      </LeftItems>
      <VerticalLine />
      <MiddleItems>
        <HeaderText as="h4">Quick links</HeaderText>
        <LinkWrapper>
          {links.map((link, index) => (
            <LinkItemWrap key={index}>
              <Link href={link.href}>{link.page}</Link>
            </LinkItemWrap>
          ))}
        </LinkWrapper>
      </MiddleItems>
      <VerticalLine />
      <RightItems>
        <HeaderText as="h4">Subscribe To Our News Letters</HeaderText>
        <SubscribeWrapper>
          <EmailInput placeholder="Enter Email" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscribeWrapper>
      </RightItems>
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  background-color: ${({ theme }) => theme.footerBackground};
  flex-direction: row;
  gap: 20px;
  border: 0.8px solid #8c8c8c;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const LeftItems = styled(Box)`
  color: ${({ theme }) => theme.footerTextColor};
`;

const Logo = styled(Image)`
  width: 150px;
  height: 150px;
  color: ${({ theme }) => theme.footerTextColor};

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
const LeftText = styled(Text)`
  text-align: left;
  color: ${({ theme }) => theme.footerTextColor};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const MiddleItems = styled(Box)`
  color: ${({ theme }) => theme.footerTextColor};
`;

const LinkItemWrap = styled(Box)`
  padding: 10px;
  color: ${({ theme }) => theme.footerTextColor};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LinkWrapper = styled(Box)`
  @media (max-width: 768px) {
  }
`;

const RightItems = styled(Box)``;

const SubscribeWrapper = styled.div`
  flex-direction: row;
`;
const EmailInput = styled.input`
  height: 50px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  outline: none;
  text-align: center;
  color: ${({ theme }) => theme.footerTextColor};
  background-color: ${({ theme }) => theme.footerBackground};

  @media (max-width: 768px) {
    width: 170px;
    font-size: 14px;
  }
`;

const SubscribeButton = styled.button`
  height: 50px;
  width: 100px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  outline: none;
  color: ${({ theme }) => theme.footerTextColor};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: ${({ theme }) => theme.footerBackground};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 768px) {
    width: 100px;
    font-size: 14px;
  }
`;
