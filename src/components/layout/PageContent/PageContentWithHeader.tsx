import { BackButton } from "@/components/BackButton/BackButton";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface PageContentWithHeaderProps {
  pageTitle: string;
  children: ReactNode;
}

export const PageContentWithHeader: React.FC<PageContentWithHeaderProps> = ({
  pageTitle,
  children,
}) => {
  return (
    <MainWrapper>
      <Header>
        <BackButton />
        <PageTitle>{pageTitle}</PageTitle>
      </Header>
      {children}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 100px;
  @media (max-width: 768px) {
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
  }
`;

const PageTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  width: 300px;
`;
