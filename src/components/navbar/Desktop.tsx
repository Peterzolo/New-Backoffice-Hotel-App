"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Image } from "../Image/Image";
import { selectedImages } from "@/assets/images";
import { useSelector } from "react-redux";
import {
  logoutErrorSelector,
  logoutLoadingSelector,
  logoutSuccessSelector,
  userAuthenticatedSelector,
} from "@/app/redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useRouter } from "next/navigation";
import { Dropdown } from "../dropdown/Dropdown";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutRequestStart } from "@/app/redux/slice/newRedux/reducers/auth/signUpReducer";
import { FlashMessage } from "../FlashMessage/Flashmessage";
import BlankPageLoader from "@/app/loading";
import { localStore } from "@/app/utils/localStore";
import { StorageVariable } from "@/app/utils/constants/storageVariables";

export const DesktopNavbar: React.FC<{
  links: { page: string; href: string; onClick?: () => void }[];
}> = ({ links }) => {
  const isAuthFromStore = useSelector(userAuthenticatedSelector);
  const [showDropdown, setShowDropdown] = useState(false);
  const logoutSuccess = useSelector(logoutSuccessSelector);
  const dataLoading = useSelector(logoutLoadingSelector);
  const logoutError = useSelector(logoutErrorSelector);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const authenticated = isAuthFromStore || isAuthenticated;

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticatedFromStorage = localStore.getItem(
        StorageVariable.IS_AUTHENTICATED
      );

      await new Promise((resolve) => setTimeout(resolve, 500));

      setIsAuthenticated(!!isAuthenticatedFromStorage);
    };

    checkAuthentication();
  }, []);

  const handleLogout = () => {
    dispatch(logoutRequestStart({}));
  };

  useEffect(() => {
    if (logoutSuccess) {
      setTimeout(() => {
        router.replace("/login");
        setShowDropdown(false);
      }, 500);
    }
  }, [logoutSuccess, router]);

  if (dataLoading) return <BlankPageLoader />;

  if (logoutError) return <FlashMessage message={logoutError} type="error" />;

  return (
    <Wrapper>
      <Logo>
        <Link href="/">
          <Image
            src={selectedImages.logo}
            width="70px"
            height="70px"
            alt="logo"
            style={{ borderRadius: "5px" }}
          />
        </Link>
      </Logo>
      <NavLinks>
        {links.map((link, index) => (
          <NavItem key={index}>
            <Link href={link.href} onClick={link.onClick}>
              {link.page}
            </Link>
          </NavItem>
        ))}

        {authenticated ? (
          <LogoutWrapper>
            <AvatarWrap>
              <AccountCircleIcon
                style={{ fontSize: " 30px", cursor: "pointer" }}
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <Dropdown
                  isOpen={showDropdown}
                  onClose={() => setShowDropdown(false)}
                  items={[{ label: "Logout", onClick: handleLogout }]}
                />
              )}
            </AvatarWrap>
          </LogoutWrapper>
        ) : (
          <LoginWrapper onClick={handleLoginClick}>Login</LoginWrapper>
        )}
      </NavLinks>
    </Wrapper>
  );
};

const LogoutWrapper = styled.div``;
const LoginWrapper = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.auxiliaryBgColor};
  padding: 5px;
  border-radius: 10px;
`;
const AvatarWrap = styled.div``;

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.navBackground};
  padding: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  flex: 0 0 auto;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-right: 30px;
  letter-spacing: 2px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

const NavItem = styled.div`
  margin-left: 20px;
  animation: ${fadeIn} 0.5s ease;
  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    padding: 10px;
    &:hover {
      text-decoration: none;
      animation: ${fadeIn} 0.5s ease;
    }
  }
`;
