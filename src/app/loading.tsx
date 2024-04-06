"use client";

import React from "react";
import { CircularProgress } from "@material-ui/core";

import styled from "styled-components";
import { Box } from "@/components/box/Box";

export const BlankPageLoader = () => {
  return (
    <MainWrapper>
      <Box>
        <CircularProgress />
      </Box>
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
`;

export default BlankPageLoader;
