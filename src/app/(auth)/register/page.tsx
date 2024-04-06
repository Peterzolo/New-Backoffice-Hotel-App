"use client";

import { Card } from "@/components/Card";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Box } from "@/components/box/Box";
import { SplitView } from "@/components/layout/splitView/SplitView";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextInput } from "@/components/input/TextInput";
import { Button } from "@/components/button/Button";
import { Text } from "@/components/Typography/Text";
import Link from "next/link";
import { linkStyle } from "@/themes/theme";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

import { useEffect, useState } from "react";
import CheckBox from "@/components/checkBox/CheckBox";
import { FlashMessage } from "@/components/FlashMessage/Flashmessage";
import { useRouter } from "next/navigation";
import {
  dataLoadingSelector,
  hasVerifiedEmailSelector,
  signUpErrorSelector,
  signUpSuccessMessageSelector,
  signUpSuccessSelector,
} from "@/app/redux/slice/newRedux/reducers/auth/selectors/signupSelector";
import { signUpStart } from "@/app/redux/slice/newRedux/reducers/auth/signUpReducer";

interface FormValues {
  email: string;
  isTermsAgreed: boolean;
}

const schema = yup
  .object({
    email: yup.string().required(),
    isTermsAgreed: yup
      .boolean()
      .oneOf([true], "You must agree to the terms")
      .required(),
  })
  .required();

const Register = () => {
  const dispatch = useDispatch();
  const dataLoading = useSelector(dataLoadingSelector);
  const signupError = useSelector(signUpErrorSelector);
  const signupSuccess = useSelector(signUpSuccessSelector);
  const signUpSuccessMessage = useSelector(signUpSuccessMessageSelector);
  const hasVerifiedEmail = useSelector(hasVerifiedEmailSelector);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const router = useRouter();

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      isTermsAgreed: false,
    },
    resolver: yupResolver(schema as any),
  });

  useEffect(() => {
    if (signupSuccess !== undefined && hasVerifiedEmail !== undefined) {
      if (signupSuccess && !hasVerifiedEmail) {
        router.push("/verify-email");
      } else if (signupSuccess && hasVerifiedEmail) {
        router.push("/complete-sign-up");
      }
    }
  }, [signupSuccess, hasVerifiedEmail, router]);

  const onSubmit = async (data: FormValues) => {
    const formData = {
      email: data.email,
      isTermsAgreed: data.isTermsAgreed,
    };

    if (data.email && data.isTermsAgreed) {
      try {
        await dispatch(signUpStart(formData));
      } catch (error) {
        console.error("Error occurred during signup:", error);
      }
    }
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsTermsChecked(isChecked);
    setValue("isTermsAgreed", isChecked);
  };

  return (
    <SplitView>
      <HeaderText>Sign Up</HeaderText>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          {signupError && ( // Render error message if there's an error
            <FlashMessage message={signupError} type="error" />
          )}
          {signupSuccess && ( // Render success message if successful
            <FlashMessage message={signUpSuccessMessage} type="success" />
          )}

          <TextInput
            {...register("email")}
            name="email"
            label="Email"
            placeholder="Email"
            type="text"
            error={errors?.email?.message}
          />

          <CheckBox
            label="I agree with the"
            termsLink="/terms"
            isChecked={isTermsChecked}
            onChange={handleCheckboxChange}
            error={errors?.isTermsAgreed?.message}
          />

          {dataLoading ? (
            <>Loading...</>
          ) : (
            <Button type="primary" width="500px" disabled={dataLoading}>
              {dataLoading ? "Loading..." : "Sign Up"}
            </Button>
          )}
        </Card>

        <FormFooter>
          <Text>Already have account?</Text>
          <Link href={"/login"} style={linkStyle}>
            Login
          </Link>
        </FormFooter>
      </Form>
    </SplitView>
  );
};

export default Register;

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
  padding: 2px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
