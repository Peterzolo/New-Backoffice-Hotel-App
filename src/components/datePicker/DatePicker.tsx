"use client";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";

const DateInputContainer = styled.div`
  display: inline-block;
  position: relative;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

interface DateInputProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder: string;
  error?: string;
}

const DatePickerWrapper = styled(DatePicker)`
  /* width: 100%; */
  width: 300px;
  height: 45px;
  padding: 0.5rem;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.pageBackground};
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.borderColor};

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  .react-datepicker__input-container input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0;
  }

  .react-datepicker__input-container input::-webkit-inner-spin-button,
  .react-datepicker__input-container input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: "768px") {
    width: 100%;
    padding: 10px;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

// Wrap your functional component with React.forwardRef
export const DateInput = React.forwardRef(
  (props: DateInputProps, ref: React.Ref<any>) => {
    const datepickerRef = useRef<any>();

    const toggleCalendar = () => {
      if (datepickerRef.current) {
        datepickerRef.current.setOpen(!datepickerRef.current.state.open);
      }
    };

    return (
      <DateInputContainer>
        <DatePickerWrapper
          selected={props.value} // Use value prop instead of selected
          onChange={props.onChange}
          dateFormat="MM/dd/yyyy"
          ref={datepickerRef}
          placeholderText={props.placeholder}
        />
        <IconContainer onClick={toggleCalendar}>
          <StyledCalendarIcon />
        </IconContainer>
        {props.error && <ErrorMessage color="red">{props.error}</ErrorMessage>}
      </DateInputContainer>
    );
  }
);

const StyledCalendarIcon = styled(CalendarMonthTwoToneIcon)`
  font-size: 24px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

DateInput.displayName = "DateInput";
