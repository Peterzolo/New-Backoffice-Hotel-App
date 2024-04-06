import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { styled } from "styled-components";

interface RatingProps {
  value: number;
}

export const Rating: React.FC<RatingProps> = ({ value }) => {
  const renderStars = () => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 !== 0;

    // Adding full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarRateIcon key={i} />);
    }

    // Adding half star if applicable
    if (hasHalfStar) {
      stars.push(<StarHalfIcon key={stars.length} />);
    }

    return stars;
  };

  return <MainWrapper>{renderStars()}</MainWrapper>;
};

const MainWrapper = styled.div`
  display: inline-flex;
  color: #ffa200;
`;
