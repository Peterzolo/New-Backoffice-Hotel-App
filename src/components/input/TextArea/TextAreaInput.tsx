import React from "react";
import styled from "styled-components";

interface ITextAreaInputProps {
  message?: string;
  placeHolder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaInput: React.FC<ITextAreaInputProps> = ({
  message,
  placeHolder,
  onChange,
}) => {
  return (
    <MainWrapper>
      <Textarea placeholder={placeHolder} value={message} onChange={onChange} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: both;
  overflow: auto;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
