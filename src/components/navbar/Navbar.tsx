import React, { useState, useEffect } from "react";
import { links } from "@/data/navLinks";
import { DesktopNavbar } from "./Desktop";
import { MobileNavbar } from "./Mobile";

export const Navbar: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const determineIsMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    determineIsMobileView();

    window.addEventListener("resize", determineIsMobileView);

    return () => {
      window.removeEventListener("resize", determineIsMobileView);
    };
  }, []);

  return (
    <>
      {isMobileView ? (
        <MobileNavbar links={links} />
      ) : (
        <DesktopNavbar links={links} />
      )}
    </>
  );
};
