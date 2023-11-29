import { styled, css } from "styled-components";
import FlexContainer from "../ui/FlexContainer";
import IndividualTime from "./IndividualTime";
import { useTimer } from "../context/timerContext";

const StyledTimer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

function Timer() {
  const { days, hours, minutes, seconds } = useTimer();
  return (
    <StyledTimer>
      <IndividualTime
        name={"day"}
        startNum={days["day"] - 1}
        newNum={days["day"]}
      />
      <IndividualTime
        name={"hour"}
        startNum={hours["hour"] - 1}
        newNum={hours["hour"]}
      />
      <IndividualTime
        name={"min"}
        startNum={minutes["min"] - 1}
        newNum={minutes["min"]}
      />
      <IndividualTime
        name={"sec"}
        startNum={seconds["sec"] - 1}
        newNum={seconds["sec"]}
      />
    </StyledTimer>
  );
}

export default Timer;
