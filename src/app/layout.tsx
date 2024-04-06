// layout.tsx
"use client";

import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import { themes } from "@/themes/theme";
import { Navbar } from "@/components/navbar/Navbar";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { GlobalStyles } from "./GlobalStyle";

import { Footer } from "@/components/common/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewStoreProvider } from "./redux/slice/newRedux/store/NewStoreProvider";

type ThemeType = "light" | "dark";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType | null;
    if (storedTheme && storedTheme in themes) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--page-background",
      themes[theme].pageBackground
    );
    document.documentElement.style.setProperty(
      "--text-color",
      themes[theme].textColor
    );
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleGlobalThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <html lang="en">
        <body>
          <StyledComponentsRegistry>
            <NewStoreProvider>
              <GlobalStyles />
              <Navbar />
              {children}
              <ButtonWrap onClick={handleGlobalThemeChange}>
                {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </ButtonWrap>
            </NewStoreProvider>
          </StyledComponentsRegistry>
        </body>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;

const ButtonWrap = styled.button`
  background-color: ${({ theme }) => theme.pageBackground};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  color: ${({ theme }) => theme.iconColor};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
  border-radius: 10px;
  position: fixed; /* Set to fixed position */
  z-index: 999; /* Ensure it's above other content */
`;
