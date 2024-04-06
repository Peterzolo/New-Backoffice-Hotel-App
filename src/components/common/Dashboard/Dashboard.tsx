import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Box } from "@/components/box/Box";
import React from "react";
import styled from "styled-components";

export const Dashboard = () => {
  return (
    <MainWrapper>
      <HeaderText>Dashboard</HeaderText>
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  height: 100vh;
`;
