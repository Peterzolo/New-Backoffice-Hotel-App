"use client";

import { Card } from "@/components/Card";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Box } from "@/components/box/Box";
import { SplitView } from "@/components/layout/splitView/SplitView";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextInput } from "@/components/input/TextInput";
import { Button } from "@/components/button/Button";
import { Text } from "@/components/Typography/Text";
import Link from "next/link";
import { linkStyle } from "@/themes/theme";
import { useDispatch } from "react-redux";
import { loginRequestStart } from "@/app/redux/slice/newRedux/reducers/auth/signUpReducer";
import { useSelector } from "react-redux";
import {
  dataLoadingSelector,
  loginErrorSelector,
  loginSuccessMessageSelector,
  loginSuccessSelector,
  logingLoadingSelector,
  userAuthenticatedSelector,
} from "@/app/redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import { BlankPageLoader } from "@/app/loading";
import { useRouter } from "next/navigation";
import { FlashMessage } from "@/components/FlashMessage/Flashmessage";

interface FormValues {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const dataLoading = useSelector(logingLoadingSelector);
  const loginError = useSelector(loginErrorSelector);
  const isAuthenticated = useSelector(userAuthenticatedSelector);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema as any),
  });

  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    const formData = {
      email: data.email,
      password: data.password,
    };

    dispatch(loginRequestStart(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push(`/dashboard/${"12"}`);
    }
  }, [isAuthenticated, router]);

  if (dataLoading) {
    return <BlankPageLoader />;
  }

  return (
    <SplitView>
      <HeaderText as="h3">LogIn</HeaderText>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FlashMessage message={loginError} type="error" />}
        <Card>
          <Box>
            <TextInput
              {...register("email")}
              name="email"
              label="Email"
              placeholder="Email"
              type="text"
              error={errors?.email?.message}
            />
          </Box>
          <Box>
            <TextInput
              {...register("password")}
              name="password"
              label="Password"
              placeholder="password"
              type="password"
              error={errors?.password?.message}
            />
          </Box>

          <Button type="primary" width="500px">
            LogIn
          </Button>

          <ForgotPassword>
            <Link href={"/forgot-password"} style={linkStyle}>
              Forgot Password?
            </Link>
          </ForgotPassword>

          <FormFooter>
            <Text>Not yet registered ?</Text>
            <Link href={"/register"} style={linkStyle}>
              Sign Up
            </Link>
          </FormFooter>
        </Card>
      </Form>
    </SplitView>
  );
};

export default Login;

const Form = styled.form`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    width: 350px;
    margin-bottom: 200px;
    margin-left: 30px;
  }
`;

const FormFooter = styled(Box)`
  padding: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ForgotPassword = styled(Box)`
  padding: 0px;
  align-items: flex-end;
  margin-right: 120px;
`;
