import React, { useState, forwardRef, ForwardedRef } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import styled from "styled-components";

interface TextInputProps {
  type?: "text" | "password" | "number" | "tel";
  value?: string;
  name?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  border?: string;
}

const StyledTextInput = styled.input<TextInputProps>`
  outline: none;
  border-radius: 5px;
  padding: 10px;
  width: 500px;
  margin-top: 15px;
  outline: none;
  border: none;
  height: 55px;
  margin-bottom: 5px;

  color: ${({ theme }) => theme.textInputColor};
  background-color: ${({ theme }) => theme.textInputBackground};
  border: 0.6px solid ${({ theme }) => theme.borderColor};
  transition: border-color 0.3s ease-in-out;
  &:focus {
    border-color: ${({ theme }) => theme.borderColor};
  }

  &::placeholder {
    transition: transform 0.3s ease-in-out;
    transform-origin: left bottom;
  }

  &:focus::placeholder {
    transform: translateY(-100%) scale(0.8);
  }

  @media (max-width: 768px) {
    width: 270px;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const TextInput = forwardRef(
  (
    {
      type = "text",
      value,
      name,
      label,
      error,
      placeholder,
      onChange,
      onClick,
      ...rest
    }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div style={{ position: "relative" }}>
        <StyledTextInput
          type={inputType}
          value={value}
          name={name}
          label={label}
          error={error}
          placeholder={placeholder}
          onChange={onChange}
          onClick={onClick}
          ref={ref}
          {...rest}
        />
        {type === "password" && (
          <PasswordToggle type="button" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <VisibilityOffOutlinedIcon />
            ) : (
              <VisibilityOutlinedIcon />
            )}
          </PasswordToggle>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}{" "}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
