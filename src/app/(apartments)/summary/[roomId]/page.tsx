// pages/summary/[roomId].tsx
"use client";

import { Box } from "@/components/box/Box";
import { Stepper } from "@/components/stepper/Stepper";
import styled from "styled-components";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Image } from "@/components/Image/Image";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Text } from "@/components/Typography/Text";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@/components/button/Button";
import { PageContentWithHeader } from "@/components/layout/PageContent/PageContentWithHeader";
import { Rating } from "@/components/Rating";
import { STEP_NAMES } from "@/constants/stepper";

interface SummaryPageProps {
  params: {
    roomId: string;
  };
}

export default function SummaryPage({ params }: SummaryPageProps) {
  const currentStep = 1;
  const totalSteps = 3;

  const id = params.roomId;

  return (
    <PageContentWithHeader pageTitle="Reservation Summary">
      <Stepper
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepNames={STEP_NAMES}
      />

      <SummaryContent>
        <LeftContent>
          <MaintTitle>
            <HeaderText as="h4">You have Cheson this Apartment</HeaderText>{" "}
          </MaintTitle>
          <LeftContentCard>
            <Image
              src={"/images/hotel.jpg"}
              alt={"name"}
              width="100%"
              height="500px"
            />
          </LeftContentCard>
          <Card flexDirection="row">
            <Box>
              <HeaderText as="h3">Apartment of 2 Rooms [Family]</HeaderText>
              <Text>
                You have secured a lovely apartment with two rooms for your
                stay. Before finalizing the booking, We would like you to review
                and select your preferred option. Each room offers comfort and
                convenience, ensuring a pleasant experience.
              </Text>
              <Box>
                <Button type="primary">
                  <Link
                    href={`/guestInfo/${id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Select
                  </Link>
                </Button>
              </Box>
            </Box>

            <Box>
              <Rating value={4.5} />
              <Card height="200px">
                <HeaderText>${179.99}</HeaderText>
                <Text>Per Night</Text>
              </Card>
            </Box>
          </Card>
        </LeftContent>

        <RightContentCard>
          <Title>
            <HeaderText as="h4">Your Reservation</HeaderText>
          </Title>

          <Text>
            Thank you for selecting our apartment for your stay! Your
            reservation summary: Apartment booking confirmed. We look forward to
            welcoming you and ensuring a comfortable and enjoyable stay with us
          </Text>

          <ReservationContent>
            <ItemWrap>
              <CheckIconWrap
                style={{ marginRight: "15px", marginBottom: "10px" }}
              />
              <Text> Check In</Text>
              <Text>13th March 2024</Text>
            </ItemWrap>
            <ItemWrap>
              <CheckIconWrap
                style={{ marginRight: "15px", marginBottom: "10px" }}
              />
              <Text> Check Out</Text>
              <Text>20th March 2024</Text>
            </ItemWrap>
            <ItemWrap>
              <CheckIconWrap
                style={{ marginRight: "15px", marginBottom: "10px" }}
              />
              <Text> Guest</Text>
              <Text>2 Adults & 2 Children</Text>
            </ItemWrap>
            <ItemWrap>
              <CheckIconWrap
                style={{ marginRight: "15px", marginBottom: "10px" }}
              />
              <Text> Rooms</Text>
              <Text>2 </Text>
            </ItemWrap>
          </ReservationContent>

          <Button type="secondary">
            <Link href={`/apartments/${id}`}>Edit Reservation</Link>
          </Button>
        </RightContentCard>
      </SummaryContent>
    </PageContentWithHeader>
  );
}

const MainWrapper = styled(Box)`
  margin-top: 130px;
  background-color: green;

  @media (max-width: 768px) {
    margin-top: -50px;
  }
`;

const SummaryContent = styled(Box)`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const CheckIconWrap = styled(CheckIcon)`
  background-color: ${({ theme }) => theme.borderColor};
  border-radius: 20px;
`;

const LeftContent = styled(Box)`
  flex: 2;
  width: 100%;
  padding: 10px;
`;

const Title = styled(Box)`
  color: ${({ theme }) => theme.secondaryTextColor};
  padding: 3px;
  align-items: flex-start;
`;

const LeftContentCard = styled(Box)`
  flex: 1;
`;

const RightContentCard = styled(Card)`
  flex: 1;
`;

const Desc = styled(Text)`
  font-size: 14px;
  text-align: left;
  line-height: 24px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

const ReservationContent = styled(Box)`
  padding: 5px;
  gap: 10px;
`;

const ItemWrap = styled(Box)`
  flex-direction: row;
  padding: 0px;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  color: ${({ theme }) => theme.insetTextColor};
  font-weight: bold;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Item = styled(Text)`
  color: ${({ theme }) => theme.insetTextColor};
  font-weight: 500;
  margin-top: 10px;
  padding: 0px;
`;
const MaintTitle = styled(Box)`
  color: ${({ theme }) => theme.textColor};
  padding: 5px;
  background-color: ${({ theme }) => theme.auxiliaryBgColor};
`;
