import { linkStyle } from "@/themes/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  error?: string;
  termsLink?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  isChecked,
  onChange,
  error,
  termsLink,
}) => {
  const handleCheckboxChange = () => {
    onChange(!isChecked);
  };

  return (
    <CheckboxContainer>
      <StyledCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <LabelText>
        <Label>{label}</Label>
        {termsLink && (
          <Link href={termsLink} style={{ textDecoration: "none" }}>
            terms and conditions
          </Link>
        )}
      </LabelText>
      {error && <ErrorText>{error}</ErrorText>}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #007bff;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;

  &:checked {
    background-color: #007bff;
  }
`;

const LabelText = styled.div`
  margin-right: 8px;
  padding: 5px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.div`
  margin-right: 5px;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;

export default CheckBox;
