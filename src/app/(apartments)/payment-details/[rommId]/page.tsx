"use client";

import { Box } from "@/components/box/Box";
import { Stepper } from "@/components/stepper/Stepper";
import styled from "styled-components";

import { PageContentWithHeader } from "@/components/layout/PageContent/PageContentWithHeader";
import { HeaderText } from "@/components/Typography/header/HeaderText";
import { Card } from "@/components/Card";
import { Text } from "@/components/Typography/Text";
import { Button } from "@/components/button/Button";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import { CreditDebitCardPaymentDetails } from "../paymentOptions/creditCard/CreditDebitCardPaymentDetails";
import { BankTransferDetails } from "../paymentOptions/creditCard/BankTransferDetails";
import { EmailPaymentMethod } from "../paymentOptions/creditCard/EmailMethodDetails";
import { STEP_NAMES } from "@/constants/stepper";

interface GuestInfoPageProps {
  params: {
    roomId: string;
  };
}

export default function PaymentDetails({ params }: GuestInfoPageProps) {
  const currentStep = 3;
  const totalSteps = 3;

  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isBankTransferModalOpen, setIsBankTransferModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleCardModalOpen = () => {
    setIsCardModalOpen(true);
  };

  const handleCardModalClose = () => {
    setIsCardModalOpen(false);
  };

  const handleBankTransferModalOpen = () => {
    setIsBankTransferModalOpen(true);
  };

  const handleBankTransferModalClose = () => {
    setIsBankTransferModalOpen(false);
  };

  const handleEmailModalOpen = () => {
    setIsEmailModalOpen(true);
  };

  const handleEmailModalClose = () => {
    setIsEmailModalOpen(false);
  };

  return (
    <PageContentWithHeader pageTitle="Reservation Summary">
      <MainWrapper>
        <Stepper
          currentStep={currentStep}
          totalSteps={totalSteps}
          stepNames={STEP_NAMES}
        />

        <Box marginTop="50px" width="900px">
          <Card padding="10px">
            <HeaderText as="h3">Your Payment Details</HeaderText>

            <Card width="800px" marginTop="10px">
              <Box
                padding="2px"
                flexDirection="row"
                alignItems="center"
                width="600px"
                justifyContent="space-between"
              >
                <Text>Apartment Name</Text>
                <Text fontWeight="600">New Luxury</Text>
              </Box>
              <Box
                padding="2px"
                flexDirection="row"
                alignItems="center"
                width="600px"
                justifyContent="space-between"
              >
                <Text>No Of Occupants</Text>
                <Text fontWeight="600">4</Text>
              </Box>
              <Box
                padding="2px"
                flexDirection="row"
                alignItems="center"
                width="600px"
                justifyContent="space-between"
              >
                <Text>No of Room</Text>
                <Text fontWeight="600">2</Text>
              </Box>
              <Box
                padding="2px"
                flexDirection="row"
                alignItems="center"
                width="600px"
                justifyContent="space-between"
              >
                <Text>Price</Text>
                <Text fontWeight="600">${300}.00</Text>
              </Box>
              <Box
                padding="2px"
                flexDirection="row"
                alignItems="center"
                width="600px"
                justifyContent="space-between"
              >
                <Text>Discount</Text>
                <Text fontWeight="600">${100}.00</Text>
              </Box>
              <Box
                padding="2px"
                flexDirection="row"
                alignItems="center"
                width="600px"
                justifyContent="space-between"
              >
                <Text>VAT</Text>
                <Text fontWeight="600">${30}.00</Text>
              </Box>
              <Box
                padding="2px"
                flexDirection="row"
                alignItems="center"
                width="600px"
                justifyContent="space-between"
              >
                <Text>Total Due</Text>
                <Text fontWeight="600">${306}.00</Text>
              </Box>
            </Card>
            <Box>
              <HeaderText as="h4">Pay By</HeaderText>
            </Box>
            <Card flexDirection="row" justifyContent="space-between">
              <Box>
                <Button type="primary" onClick={handleCardModalOpen}>
                  {" "}
                  <Text color="white"> Credit/Debit Card</Text>{" "}
                </Button>
                <Modal isOpen={isCardModalOpen} onClose={handleCardModalClose}>
                  <CreditDebitCardPaymentDetails
                    onClose={handleCardModalClose}
                  />
                </Modal>
              </Box>
              <Box>
                <Box>
                  <Button type="primary" onClick={handleBankTransferModalOpen}>
                    {" "}
                    <Text color="white"> Bank Transfer</Text>{" "}
                  </Button>
                  <Modal
                    isOpen={isBankTransferModalOpen}
                    onClose={handleBankTransferModalClose}
                  >
                    <BankTransferDetails
                      onClose={handleBankTransferModalClose}
                    />
                  </Modal>
                </Box>
              </Box>
              <Box>
                <Button type="primary" onClick={handleEmailModalOpen}>
                  {" "}
                  <Text color="white"> Bank Transfer</Text>{" "}
                </Button>
                <Modal
                  isOpen={isEmailModalOpen}
                  onClose={handleEmailModalClose}
                >
                  <EmailPaymentMethod onClose={handleEmailModalClose} />
                </Modal>
              </Box>
            </Card>
          </Card>
        </Box>
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

const PaymentOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PaymentOption = styled.div`
  margin-bottom: 20px;
`;

const PaymentOptionButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function handleEmailPayment() {
  // Handle payment by email
}

function handlePaystackPayment() {
  // Handle payment with Paystack
}

function handleFlutterwavePayment() {
  // Handle payment with Flutterwave
}

const CreditDebitCardPaymentDetails2 = () => (
  <div>
    {/* Add your Credit/Debit Card payment details here */}
    <p>Credit/Debit Card Payment Details</p>
  </div>
);
