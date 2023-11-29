import { styled } from "styled-components";
import Card from "../ui/Card";
import FlexContainer from "../ui/FlexContainer";
import Paragraph from "../ui/Paragraph";

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
  display: flex;
  justify-content: center;
`;
const StyledBottom = styled(Card)`
  background-color: hsl(var(--color-dark-desaturated-blue) / 0.8);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  bottom: 0;
`;

function IndividualTime({ type, unit }) {
  return (
    <FlexContainer $flex="column" $align="center">
      <StyledIndividualTime className="flip-card" id={type}>
        <StyledTop className="top">{unit}</StyledTop>
        <StyledBottom className="bottom">{unit}</StyledBottom>
      </StyledIndividualTime>
      <Paragraph>{type}</Paragraph>
    </FlexContainer>
  );
}

export default IndividualTime;
