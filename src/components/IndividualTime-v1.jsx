import { styled } from "styled-components";
import Card from "../ui/Card";
import FlexContainer from "../ui/FlexContainer";
import Paragraph from "../ui/Paragraph";
import { useEffect, useState } from "react";

const StyledIndividualTime = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 5px 2px hsl(var(--color-very-dark-mostly-black-blue));
  border-radius: 5px;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    background: hsl(var(--color-very-dark-blue));
    width: 8px;
    height: 8px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 999;

    @media (min-width: 1200px) {
      width: 10px;
      height: 10px;
    }
  }

  &:after {
    transform: translate(-50%, -50%);
    left: 0;
  }
  &:before {
    transform: translate(50%, -50%);
    right: 0;
  }
`;

const StyledTop = styled(Card)`
  background-color: hsl(var(--color-dark-desaturated-blue) / 0.5);
  border-bottom: 0.5px solid hsl(var(--color-very-dark-mostly-black-blue));
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const StyledBottom = styled(Card)`
  background-color: hsl(var(--color-dark-desaturated-blue) / 0.8);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const StyledTopFlip = styled.div``;
const StyledBottomFlip = styled.div``;

function IndividualTime({ name, startNum, newNum }) {
  const [isFlipCardVisible, setIsFlipCardVisible] = useState(false);

  useEffect(() => {
    // Compare startNum and newNum to decide whether to trigger the animation
    if (startNum !== newNum) {
      setIsFlipCardVisible(true);

      // Set a timeout to hide the flip card after the animation duration
      setTimeout(() => {
        setIsFlipCardVisible(false);
      }, 500); // Adjust the timeout based on your animation duration
    }
  }, [startNum, newNum]);

  return (
    <FlexContainer flex="column" align="center">
      <StyledIndividualTime>
        <StyledTop>{isFlipCardVisible ? newNum : startNum}</StyledTop>
        <StyledBottom>{isFlipCardVisible ? newNum : startNum}</StyledBottom>
        {isFlipCardVisible && (
          <>
            <Card flip="top">{startNum}</Card>
            <Card flip="bottom">{startNum}</Card>
          </>
        )}
      </StyledIndividualTime>
      <Paragraph>{name}</Paragraph>
    </FlexContainer>
  );
}

export default IndividualTime;
