import { styled } from "styled-components";
import FlexContainer from "../ui/FlexContainer";
import IndividualTime from "./IndividualTime";
import { useTimer } from "../hooks/useTimer";

const StyledTimer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`;

function Timer() {
  useTimer();
  return (
    <StyledTimer>
      <IndividualTime type="days" unit="14" />
      <IndividualTime type="hours" unit="24" />
      <IndividualTime type="minutes" unit="60" />
      <IndividualTime type="seconds" unit="60" />
    </StyledTimer>
  );
}

export default Timer;
