"use client";

import { HeaderText } from "@/components/Typography/header/HeaderText";
import { HeaderContent } from "@/components/layout/HeaderContent/HeaderContent";
import { PageContentWithHeader } from "@/components/layout/PageContent/PageContentWithHeader";
import React from "react";

const page = () => {
  return (
    <PageContentWithHeader pageTitle="Terms And Condition">
      <HeaderText as="h1">Our Operational terms</HeaderText>
    </PageContentWithHeader>
  );
};

export default page;
