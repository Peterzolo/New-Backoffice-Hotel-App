import { Box } from "@/components/box/Box";
import { Button } from "@/components/button/Button";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

interface CreditDebitCardPaymentDetailsProps {
  onClose: () => void;
}

export const CreditDebitCardPaymentDetails: React.FC<
  CreditDebitCardPaymentDetailsProps
> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <MainWrapper>
      <CloseButton onClick={handleClose}>
        <CloseIcon />
      </CloseButton>

      <Box>Credit card method</Box>
    </MainWrapper>
  );
};

const MainWrapper = styled(Box)`
  position: relative;
  width: 700px;
  height: 500px;
  background-color: ${({ theme }) => theme.pageBackground};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CloseButton = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  color: ${({ theme }) => theme.textColor};
`;
