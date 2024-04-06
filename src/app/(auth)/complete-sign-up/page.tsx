"use client";

import { Card } from "@/components/Card";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Box } from "@/components/box/Box";
import { SplitView } from "@/components/layout/splitView/SplitView";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextInput } from "@/components/input/TextInput";
import { Button } from "@/components/button/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { FlashMessage } from "@/components/FlashMessage/Flashmessage";
import {
  completeSignUpErerorSelector,
  completeSignUpSuccessSelector,
  dataLoadingSelector,
} from "@/app/redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import { completeSignUpUpStart } from "@/app/redux/slice/newRedux/reducers/auth/signUpReducer";
import BlankPageLoader from "@/app/loading";

interface FormValues {
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    password: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  })
  .required();

const CompleteSignUp = () => {
  const dispatch = useDispatch();
  const error = useSelector(completeSignUpErerorSelector);
  const dataLoading = useSelector(dataLoadingSelector);
  const completeSignupSuccess = useSelector(completeSignUpSuccessSelector);

  const router = useRouter();
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema as any),
  });

  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    const formData = {
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
    };
    dispatch(completeSignUpUpStart(formData));
  };

  useEffect(() => {
    if (completeSignupSuccess) {
      router.push("/login");
    }
  }, [completeSignupSuccess, router]);

  if (dataLoading) {
    return <BlankPageLoader />;
  }

  if (error) {
    return <FlashMessage message={error} type={"error"} />;
  }

  return (
    <SplitView>
      <HeaderText>Complete Sign Up</HeaderText>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Box>
            <TextInput
              {...register("firstName")}
              name="firstName"
              label="firstName"
              placeholder="First Name"
              type="text"
              error={errors?.firstName?.message}
            />

            <TextInput
              {...register("lastName")}
              name="lastName"
              label="lastName"
              placeholder="Last name"
              type="text"
              error={errors?.lastName?.message}
            />
            <TextInput
              {...register("phoneNumber")}
              name="phoneNumber"
              label="phoneNumber"
              placeholder="Phone"
              type="text"
              error={errors?.phoneNumber?.message}
            />
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

export default CompleteSignUp;

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
