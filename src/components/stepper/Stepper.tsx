import React from "react";
import { Box } from "../box/Box";
import styled from "styled-components";
import { HeaderText } from "../Typography/header/HeaderText";

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
}

export const Stepper: React.FC<StepperProps> = ({
  currentStep,
  totalSteps,
  stepNames,
}) => {
  return (
    <MainWrapper>
      <StepperContent>
        {Array.from(Array(totalSteps).keys()).map((step, index) => (
          <div
            key={index}
            style={{
              width: "120px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: currentStep === index + 1 ? "#007bff" : "#ddd",
                color: currentStep === index + 1 ? "#fff" : "#777",
                fontSize: "1.2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:
                  currentStep === index + 1
                    ? "2px solid #007bff"
                    : "2px solid #ddd",
              }}
            >
              {step + 1}
            </div>
            <NameWrapper>
              <HeaderText as="h6" padding="0px">
                {stepNames && stepNames[index]}
              </HeaderText>
            </NameWrapper>
          </div>
        ))}
      </StepperContent>
      <StepperLine></StepperLine>
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  position: relative;
  padding: 0px;
  @media (max-width: 768px) {
    margin-top: 3cqb;
  }
`;

const StepperContent = styled(Box)`
  flex-direction: row;
  max-width: 1000px;
  width: 100%;
  justify-content: space-between;
  height: 5px;
  z-index: 20;
`;

const StepperLine = styled(Box)`
  padding: 2px;
  max-width: 950px;
  width: 100%;
  background-color: #d7d7d7;
  height: 20px;
  position: absolute;
  top: 10%;
  transform: translateY(-50%);
  z-index: 10;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const NameWrapper = styled(Box)`
  padding: 0px;
  color: ${({ theme }) => theme.textColor};
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
