import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface FlashMessageProps {
  message: string | null;
  type: "error" | "success";

  height?: number;
  animationDuration?: number;
}

export const FlashMessage: React.FC<FlashMessageProps> = ({
  message,
  type,

  height = 50,
  animationDuration = 0.5,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <Wrapper
          type={type}
          height={height}
          animationDuration={animationDuration}
        >
          {message}
        </Wrapper>
      )}
    </>
  );
};

const flashAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div<{
  type: string;

  height: number;
  animationDuration: number;
}>`
  padding: 10px;
  margin-top: 250px;
  height: ${(props) => props.height}px;
  background-color: ${(props) =>
    props.type === "error" ? "#ff7875" : "green"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: -${(props) => props.height}px;
  left: 50%;

  border-radius: 8px;
  animation: ${flashAnimation} ${(props) => props.animationDuration}s
    ease-in-out;

  @media (max-width: 768px) {
    left: 10%;
  }
`;
