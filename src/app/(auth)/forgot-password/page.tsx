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
import { useDispatch } from "react-redux";
import {
  forgotPasswordRequestStart,
  loginRequestStart,
} from "@/app/redux/slice/newRedux/reducers/auth/signUpReducer";
import { useSelector } from "react-redux";
import {
  dataLoadingSelector,
  forgotPasswordErrorSelector,
  forgotPasswordSuccessMessageSelector,
  forgotPasswordSuccessSelector,
} from "@/app/redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import { BlankPageLoader } from "@/app/loading";
import { useRouter } from "next/navigation";
import { FlashMessage } from "@/components/FlashMessage/Flashmessage";
import { Text } from "@/components/Typography/Text";

interface FormValues {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
  })
  .required();

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const dataLoading = useSelector(dataLoadingSelector);
  const forgotPasswordSuccess = useSelector(forgotPasswordSuccessSelector);
  const successMessage = useSelector(forgotPasswordSuccessMessageSelector);
  const forgotPasswordError = useSelector(forgotPasswordErrorSelector);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema as any),
  });

  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    const formData = {
      email: data.email,
    };

    dispatch(forgotPasswordRequestStart(formData));
  };

  useEffect(() => {
    if (forgotPasswordSuccess) {
      router.push(`/reset-verify`);
    }
  }, [forgotPasswordSuccess, router]);

  if (dataLoading) {
    return <BlankPageLoader />;
  }

  if (forgotPasswordError) {
    return <FlashMessage message={forgotPasswordError} type="error" />;
  }

  if (forgotPasswordSuccess && successMessage) {
    return <FlashMessage message={successMessage} type="success" />;
  }

  return (
    <SplitView>
      <HeaderText>Password Reset Form</HeaderText>
      <Text fontSize="12px">
        Enter the right email and we will send you the link to reset your
        password
      </Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="primary" width="500px">
            Send
          </Button>
        </Card>
      </Form>
    </SplitView>
  );
};

export default ForgotPassword;

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
