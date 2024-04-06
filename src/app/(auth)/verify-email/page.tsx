"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/Card";
import { Image } from "@/components/Image/Image";
import { Text } from "@/components/Typography/Text";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Box } from "@/components/box/Box";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        router.push("/login");
      }
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <MainWrapper>
      <Box>
        <CardWrapper>
          <BoxWrap>
            <Image
              src="/images/email-verify.jpeg"
              alt="password-reset"
              width="300px"
              height="300px"
            />
            <HeaderText as="h3">Signup Request Successful</HeaderText>
            <Text>
              Check your email to confirm your email. You will be redirected to
              the login page in {countdown} seconds.
            </Text>
          </BoxWrap>
        </CardWrapper>
      </Box>
    </MainWrapper>
  );
};

const CardWrapper = styled(Card)`
  flex-direction: row;
  width: fit-content;
  height: 400px;
`;

const MainWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
`;

const BoxWrap = styled(Box)`
  padding: 10px;
  gap: 20px;
`;

export default Page;
