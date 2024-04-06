"use client";

import { Card } from "@/components/Card";
import { Text } from "@/components/Typography/Text";
import { Box } from "@/components/box/Box";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Box marginTop="200px">
      <Card>
        <Box>
          <Text>Not Found</Text>
          <Text>We are sorry that the page you requested was not found.</Text>
        </Box>
        <Box>
          <Link href="/">Return to home page</Link>
        </Box>
      </Card>
    </Box>
  );
};

export default NotFound;
