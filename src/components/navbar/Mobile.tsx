"use client";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import "./styles/mobileNav.css";
import styled, { keyframes } from "styled-components";
import { Image } from "../Image/Image";
import { selectedImages } from "@/assets/images";
import {
  logoutErrorSelector,
  logoutLoadingSelector,
  logoutSuccessSelector,
  userAuthenticatedSelector,
} from "@/app/redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dropdown } from "../dropdown/Dropdown";
import { useRouter } from "next/navigation";
import { logoutRequestStart } from "@/app/redux/slice/newRedux/reducers/auth/signUpReducer";
import { linkStyle } from "@/themes/theme";
import BlankPageLoader from "@/app/loading";
import { FlashMessage } from "../FlashMessage/Flashmessage";

export const MobileNavbar: React.FC<{
  links: { page: string; href: string; onClick?: () => void }[];
}> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector(userAuthenticatedSelector);
  const [showDropdown, setShowDropdown] = useState(false);
  const logoutSuccess = useSelector(logoutSuccessSelector);
  const dataLoading = useSelector(logoutLoadingSelector);
  const logoutError = useSelector(logoutErrorSelector);
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  useEffect(() => {
    if (logoutSuccess) {
      setTimeout(() => {
        router.replace("/login");
        setShowDropdown(false);
      }, 500);
    }
  }, [logoutSuccess, router]);

  const handleLogout = () => {
    dispatch(logoutRequestStart({}));
  };

  if (dataLoading) return <BlankPageLoader />;

  if (logoutError) return <FlashMessage message={logoutError} type="error" />;

  return (
    <div className="mobile-navbar-container">
      <div className="logo-container">
        <Link href="/">
          <Logo src={selectedImages.logo} alt="logo" />
        </Link>
      </div>
      <nav className="mobile-navbar">
        <MenuIconWrap onClick={toggleMenu} className="menu-icon-wrap">
          <div className="menu-icon">
            <MenuIcon />
          </div>
        </MenuIconWrap>
        {isOpen && (
          <MenuList className="menu-list">
            {links.map((link, index) => (
              <div key={index} onClick={handleLinkClick} className="menu-item">
                <Link href={link.href} style={linkStyle} onClick={link.onClick}>
                  {link.page}
                </Link>
              </div>
            ))}
            {isAuthenticated ? (
              <div className="menu-item">
                <AvatarWrap>
                  <AccountCircleIcon
                    style={{ fontSize: " 30px", cursor: "pointer" }}
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                  {showDropdown && (
                    <DropdownWrapper>
                      <Dropdown
                        isOpen={showDropdown}
                        onClose={() => setShowDropdown(false)}
                        items={[{ label: "Logout", onClick: handleLogout }]}
                      />
                    </DropdownWrapper>
                  )}
                </AvatarWrap>
              </div>
            ) : (
              <div onClick={handleLoginClick} className="menu-item">
                Login
              </div>
            )}
          </MenuList>
        )}
      </nav>
    </div>
  );
};

const AvatarWrap = styled.div`
  margin-left: 15px;
`;
const DropdownWrapper = styled.div`
  margin-right: 100px;
`;

const MenuIconWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.navBackground};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .menu-icon {
  }
`;

const Logo = styled(Image)`
  width: 70px;
  margin: 5px;
`;

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.navBackground};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  animation: ${slideDown} 0.3s ease-in-out;
  .menu-item {
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.mobileItemBg};
    text-decoration: none;
    padding: 5px 0;
    margin-top: 8px;
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    border-radius: 4px;
    letter-spacing: 10px;
    width: 100%;
  }
`;
