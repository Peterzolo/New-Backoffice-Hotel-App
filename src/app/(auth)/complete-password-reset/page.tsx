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
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { FlashMessage } from "@/components/FlashMessage/Flashmessage";
import {
  completePasswordResetErrorSelector,
  completePasswordResetSuccessSelector,
  dataLoadingSelector,
} from "@/app/redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import { completeResetPasswordStart } from "@/app/redux/slice/newRedux/reducers/auth/signUpReducer";
import BlankPageLoader from "@/app/loading";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  })
  .required();

const PasswordReset = () => {
  const dispatch = useDispatch();
  const resetError = useSelector(completePasswordResetErrorSelector);
  const dataLoading = useSelector(dataLoadingSelector);
  const completeResetSuccess = useSelector(
    completePasswordResetSuccessSelector
  );

  const router = useRouter();
  const {
    handleSubmit,

    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema as any),
  });

  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    const formData = {
      password: data.password,
    };
    dispatch(completeResetPasswordStart(formData));
  };

  useEffect(() => {
    if (completeResetSuccess) {
      router.push("/login");
    }
  }, [completeResetSuccess, router]);

  if (dataLoading) {
    return <BlankPageLoader />;
  }

  if (resetError) {
    return <FlashMessage message={resetError} type={"error"} />;
  }

  return (
    <SplitView>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <HeaderText as="h3">Reset Your Password</HeaderText>
          <Box>
            <TextInput
              {...register("password")}
              name="password"
              label="password"
              placeholder="Password"
              type="password"
              error={errors?.password?.message}
            />
            <TextInput
              {...register("confirmPassword")}
              name="confirmPassword"
              label="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              error={errors?.confirmPassword?.message}
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

export default PasswordReset;

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
