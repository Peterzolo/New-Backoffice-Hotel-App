import React from "react";
import Select from "react-select";
import { useTheme } from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: Option[];
  onChange?: (value: Option | null) => void;
  defaultValue?: Option | null;
  label?: string;
  id?: string;
  desktopWidth?: string;
  mobileWidth?: string;
  height?: string;
  defaultPlaceholder?: string;
  error?: string;
  placeholder?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  onChange,
  defaultValue,
  label,
  id,
  desktopWidth,
  mobileWidth,
  height,
  defaultPlaceholder = "Select",
  error,
  placeholder,
}) => {
  const theme = useTheme();

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      padding: 10,
      lineHeight: "30px",
      color: "blue",
    }),
    control: (provided: any) => ({
      ...provided,
      width: "100%",
      height: "40px",
      backgroundColor: "transparent",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: theme.textColor,
    }),
  };

  return (
    <>
      {label && (
        <label style={{ fontSize: "20px", marginBottom: "5px" }}>{label}</label>
      )}
      <Select
        id={id}
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder || defaultPlaceholder}
        styles={{
          ...customStyles,
          control: (provided) => ({
            ...provided,
            width: desktopWidth || "100%",
            height: height || "40px",
            backgroundColor: theme.pageBackground,
            color: theme.textColor,
            borderColor: theme.borderColor,
            "@media (max-width: 768px)": {
              width: mobileWidth || "100%",
            },
          }),
        }}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}{" "}
    </>
  );
};
