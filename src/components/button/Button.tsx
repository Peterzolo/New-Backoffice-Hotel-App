import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  display?: "flex" | "block" | "none";
  width?: string;
  height?: string;
  onClick?: () => void;
  color?: string;
  type?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  loading?: boolean;
}

const primaryStyle = css<ButtonProps>`
  background-color: ${({ theme }) => theme.primaryButtonBgColor};
  color: ${({ theme }) => theme.primaryButtonTextColor};
  outline: none;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.primaryButtonHoverBgColor};
  }
`;

const secondaryStyle = css<ButtonProps>`
  background-color: ${({ theme }) => theme.secondaryButtonBgColor};
  color: ${({ theme }) => theme.secondaryButtonTextColor};
  outline: none;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryButtonHoverBgColor};
  }
`;

const tertiaryStyle = css<ButtonProps>`
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.textColor};
`;

const StyledButton = styled.button<ButtonProps>`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  padding: 10px;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "60px"};
  display: ${(props) =>
    props.display === "flex"
      ? "flex"
      : props.display === "none"
      ? "none"
      : "block"};
  cursor: pointer;

  ${(props) => props.type === "primary" && primaryStyle};
  ${(props) => props.type === "secondary" && secondaryStyle};
  ${(props) => props.type === "tertiary" && tertiaryStyle};

  @media (max-width: 768px) {
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "60px"};
  }
`;

const StyledLink = styled.a`
  color: inherit; // Inherit color from parent
  text-decoration: none; // Remove default underline
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  display,
  className,
  type,
  loading,
  onClick,
  disabled,
  ...otherProps
}) => {
  return (
    <StyledButton
      className={`button ${className}`}
      display={display}
      onClick={onClick}
      type={type}
      disabled={disabled}
      loading={loading}
      {...otherProps}
    >
      {typeof children === "string" ? (
        <StyledLink>{children}</StyledLink>
      ) : (
        children
      )}
    </StyledButton>
  );
};
