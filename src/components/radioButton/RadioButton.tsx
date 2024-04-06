// RadioButton.tsx
import React from "react";
import styled from "styled-components";
import { Screen } from "../../styles/constants/Screen";
import { theme } from "../theme/Theme";

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  max-width: 100%;
  @media (max-width: ${Screen.MOBILE}px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${Screen.DESKTOP}px) {
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: ${Screen.TABLET1}px) and (max-width: ${Screen.TABLET2}px) {
    width: 50%;
    height: 50%;
  }
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  color: ${theme.mainColor.primary};
  @media (max-width: ${Screen.MOBILE}px) {
    font-size: 12px;
    font-weight: 400;
  }
`;

const RadioInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${theme.mainColor.primary};
  border-radius: 50%;
  outline: none;

  &:checked {
    background-color: #3498db;
    border: 2px solid #3498db;
  }
`;

interface RadioButtonProps {
  options?: string[];
  selectedOption?: string;
  onChange?: (value: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  options = [],
  selectedOption,
  onChange,
}) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const newValue = event.target.value;
      onChange(newValue);
    }
  };

  return (
    <RadioContainer>
      {options.map((option) => (
        <RadioOption key={option}>
          <RadioInput
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          {option}
        </RadioOption>
      ))}
    </RadioContainer>
  );
};
