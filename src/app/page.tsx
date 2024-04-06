"use client";

import styled from "styled-components";
import { Divider } from "@/components/divider/Divider";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshTokenRequestStart } from "./redux/slice/newRedux/reducers/auth/signUpReducer";
import { useSelector } from "react-redux";
import { userAuthenticatedSelector } from "./redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import Login from "./(auth)/login/page";
import { Dashboard } from "@/components/common/Dashboard/Dashboard";
import AuthGuard from "@/components/authGuard";

const Home = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(userAuthenticatedSelector);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(refreshTokenRequestStart({}));
    }
  }, [dispatch, isAuthenticated]);

  return (
    <MainWrapper>
      <Dashboard />
    </MainWrapper>
  );
};

export default AuthGuard(Home);

const MainWrapper = styled.div`
  margin-top: 90px;
`;
