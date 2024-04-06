import React, { createContext, useContext, ReactNode } from "react";
import styled from "styled-components";
import { PreLoadedView } from "./PreLoadedView";

// Create a context to hold the right component
interface SplitLayoutContextType {
  RightComponent: ReactNode;
}

const SplitLayoutContext = createContext<SplitLayoutContextType | null>(null);

interface SplitLayoutProps {
  children: ReactNode;
}

export const SplitView: React.FC<SplitLayoutProps> = ({ children }) => {
  const RightComponent = children;

  return (
    <SplitLayoutContext.Provider value={{ RightComponent }}>
      <Container>
        <LeftSide>
          <PreLoadedView />
        </LeftSide>
        <RightSide>{RightComponent}</RightSide>
      </Container>
    </SplitLayoutContext.Provider>
  );
};

export const useSplitLayout = () => {
  const context = useContext(SplitLayoutContext);
  if (!context) {
    throw new Error("useSplitLayout must be used within a SplitLayoutProvider");
  }
  return context.RightComponent;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  padding: 20px;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 350px;
    align-items: center;
    justify-content: center;
  }
`;

const LeftSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
