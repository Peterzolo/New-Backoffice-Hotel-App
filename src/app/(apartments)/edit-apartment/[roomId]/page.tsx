"use client";

import { Card } from "@/components/Card";
import { Rating } from "@/components/Rating";
import { Text } from "@/components/Typography/Text";
import { Button } from "@/components/button/Button";
import { DateInput } from "@/components/datePicker/DatePicker";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { styled } from "styled-components";
import { states } from "@/data/state";
import { SelectInput } from "@/components/input/SelectInput";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import Link from "next/link";
import { Box } from "@/components/box/Box";
import { expraColor } from "@/themes/theme";

interface IEditDetailsProps {
  rating: number;
  price: number;
  name: string;
  id: string;
}

interface Option {
  value: string;
  label: string;
}

interface FormValues {
  startDate: Date | null;
  endDate: Date | null;
  adults: Option | null;
  children: Option | null;
  state: string | null;
  city: string | null;
}

const schema = yup
  .object({
    startDate: yup.date().nullable().required(),
    endDate: yup.date().nullable().required(),
    adults: yup.object().nullable().required(),
    children: yup.object().nullable().required(),
    state: yup.string().required(),
    city: yup.string().required(),
  })
  .required();

const EditSearch: React.FC<IEditDetailsProps> = ({
  rating,
  price,
  name,
  id,
}: IEditDetailsProps) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [cityOptions, setCityOptions] = useState<Option[]>([]);
  const defaultOption = { value: "", label: "Select an option" };

  const stateOptions = [
    defaultOption,
    ...states.map((state) => ({ value: state.name, label: state.name })),
  ];

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      startDate: null,
      endDate: null,
      adults: null,
      children: null,
      state: null,
      city: null,
    },
    resolver: yupResolver(schema as any),
  });

  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    console.log(data);
  };

  const handleStateChange = (value: Option | null) => {
    if (value) {
      setSelectedState(value.value);
      setValue("state", value.value);
      setValue("city", defaultOption.value);
      const selectedStateData = states.find(
        (state) => state.name === value.value
      );
      if (selectedStateData) {
        setCityOptions([
          defaultOption,
          ...selectedStateData.lgas.map((lga) => ({ value: lga, label: lga })),
        ]);
      }
    } else {
      setSelectedState(null);
      setValue("state", null);
      setValue("city", null);
      setCityOptions([defaultOption]);
    }
  };

  return (
    <MainWrapper>
      <Card width="800px">
        <HeaderText>Edit </HeaderText>
      </Card>
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  margin-top: 150px;

  @media (max-width: 768px) {
    width: 350px;
  }
`;

const TopContent = styled(Box)`
  align-items: center;
  /* width: 600px; */
`;

const InputWrapper = styled(Box)`
  gap: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 50px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 5px;
  gap: 10px;

  @media (max-width: 768px) {
    width: 300px;
    margin-bottom: 30px;
    margin-left: -50px;
  }
`;

export default EditSearch;
