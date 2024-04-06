// pages/summary/[roomId].tsx
"use client";

import { Box } from "@/components/box/Box";
import { Stepper } from "@/components/stepper/Stepper";
import styled from "styled-components";
import Link from "next/link";
import { PageContentWithHeader } from "@/components/layout/PageContent/PageContentWithHeader";
import { Button } from "@/components/button/Button";
import { linkStyle } from "@/themes/theme";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Card } from "@/components/Card";
import { Text } from "@/components/Typography/Text";
import { Divider } from "@/components/divider/Divider";
import CheckIcon from "@mui/icons-material/Check";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { ContentLayoutPageContent } from "@/components/layout/oddContentLayout/OddContentlayout";
import { TextInput } from "@/components/input/TextInput";
import { TextAreaInput } from "@/components/input/TextArea/TextAreaInput";
import { STEP_NAMES } from "@/constants/stepper";

interface GuestInfoPageProps {
  params: {
    roomId: string;
  };
}

export interface IGuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  message: string;
}

interface FormValues extends IGuestDetails {}

const schema = yup
  .object({
    firstName: yup.date().nullable().required(),
    lastName: yup.date().nullable().required(),
    email: yup.date().nullable().required(),
    phone: yup.date().nullable().required(),

    city: yup.date().nullable().required(),
    state: yup.date().nullable().required(),
    country: yup.date().nullable().required(),
  })
  .required();

export default function GuestInfo({ params }: GuestInfoPageProps) {
  const currentStep = 2;
  const totalSteps = 3;

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      message: "",
    },
    resolver: yupResolver(schema as any),
  });

  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    console.log(data);
  };

  return (
    <PageContentWithHeader pageTitle="Reservation Summary">
      <MainWrapper>
        <Stepper
          currentStep={currentStep}
          totalSteps={totalSteps}
          stepNames={STEP_NAMES}
        />

        <ContentLayoutPageContent
          justifyContent="flex-start"
          alignItems="flex-start"
          marginTop="30px"
        >
          <Card>
            <HeaderText>Your reservation Details</HeaderText>
            <Text>
              Thank you for selecting our apartment for your stay! Your
              reservation summary: Apartment booking confirmed. We look forward
              to welcoming you and ensuring a comfortable and enjoyable stay
              with us
            </Text>

            <Divider height="3px" />

            <Box flexDirection="row" padding="0px" justifyContent="flex-stat">
              <CheckIcon style={{ marginBottom: "20px" }} />
              <Text>Check In</Text>
              <Text>13th March 2024</Text>
            </Box>
            <Box flexDirection="row" padding="0px" justifyContent="flex-stat">
              <CheckIcon style={{ marginBottom: "20px" }} />
              <Text>Check Out</Text>
              <Text>20th March 2024</Text>
            </Box>
            <Box flexDirection="row" padding="0px" justifyContent="flex-stat">
              <CheckIcon style={{ marginBottom: "20px" }} />
              <Text>Guest</Text>
              <Text>2 Adults & 2 Children</Text>
            </Box>
            <Box flexDirection="row" padding="0px" justifyContent="flex-stat">
              <CheckIcon style={{ marginBottom: "20px" }} />
              <Text>No. of Room</Text>
              <Text>2</Text>
            </Box>
            <TotalAmountWrapper padding="0px">
              <HeaderText as="h4">Total Amount Due</HeaderText>
              <HeaderText as="h1">${177.99}</HeaderText>
            </TotalAmountWrapper>

            <Divider height="10px" />

            <Box padding="0px" marginTop="0px">
              <Button type="primary">
                <Link href={`/apartments/${params.roomId}`} style={linkStyle}>
                  Edit Reservation
                </Link>
              </Button>
            </Box>
          </Card>

          <Card>
            <HeaderText as="h3">Guest Details</HeaderText>
            <Text>
              Please take a moment to provide your details below. Your
              information helps us ensure a smooth reservation process. Thank
              you
            </Text>

            <Card>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <InputWrapper flexDirection="row" gap="70px">
                  <TextInput
                    {...register("firstName")}
                    name="firstName"
                    label="First Name"
                    placeholder="First Name"
                    type="text"
                    error={errors?.firstName?.message}
                  />
                  <TextInput
                    {...register("lastName")}
                    name="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    type="text"
                    error={errors?.lastName?.message}
                  />
                </InputWrapper>
                <InputWrapper flexDirection="row" gap="70px">
                  <TextInput
                    {...register("email")}
                    name="email"
                    label="Email"
                    placeholder="Email"
                    type="text"
                    error={errors?.email?.message}
                  />
                  <TextInput
                    {...register("phone")}
                    name="phone"
                    label="Ohone"
                    placeholder="Phone"
                    type="text"
                    error={errors?.phone?.message}
                  />
                </InputWrapper>
                <InputWrapper flexDirection="row" gap="70px">
                  <TextInput
                    {...register("address")}
                    name="address"
                    label="Address"
                    placeholder="Address"
                    type="text"
                    error={errors?.address?.message}
                  />
                  <TextInput
                    {...register("city")}
                    name="city"
                    label="City"
                    placeholder="City"
                    type="text"
                    error={errors?.city?.message}
                  />
                </InputWrapper>
                <InputWrapper flexDirection="row" gap="70px">
                  <TextInput
                    {...register("state")}
                    name="state"
                    label="State"
                    placeholder="State"
                    type="text"
                    error={errors?.state?.message}
                  />
                  <TextInput
                    {...register("country")}
                    name="country"
                    label="Country"
                    placeholder="Country"
                    type="text"
                    error={errors?.country?.message}
                  />
                </InputWrapper>

                <Box>
                  <HeaderText as="h3">
                    Any Speciial Need or Additional Info?
                  </HeaderText>
                  <TextAreaInput placeHolder="Enter A message here ..." />
                </Box>

                <Box>
                  <Button type="primary">
                    <Link
                      href={`/payment-details/${params.roomId}`}
                      style={linkStyle}
                    >
                      Proceed To Payment
                    </Link>
                  </Button>
                </Box>
              </Form>
            </Card>
          </Card>
        </ContentLayoutPageContent>
      </MainWrapper>
    </PageContentWithHeader>
  );
}

const MainWrapper = styled(Box)`
  margin-top: 130px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const TotalAmountWrapper = styled(Box)`
  padding: 10px;
  background-color: ${({ theme }) => theme.auxiliaryBgColor};
  @media (max-width: 768px) {
  }
`;

const Form = styled.form`
  @media (max-width: 768px) {
    gap: 2px;
  }
`;

const InputWrapper = styled(Box)`
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2px;
  }
`;
