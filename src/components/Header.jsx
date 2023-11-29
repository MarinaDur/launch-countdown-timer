import { styled } from "styled-components";
import Heading from "../ui/Heading";
import Timer from "./Timer";
import FlexContainer from "../ui/FlexContainer";

const StyledHeader = styled(FlexContainer)`
  flex-direction: column;
  gap: 5rem;
  grid-area: content;
  padding-inline: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 7rem;
  }
`;

function Header() {
  return (
    <StyledHeader as="header">
      <Heading>WE'RE LUNCHING SOON</Heading>
      <Timer />
    </StyledHeader>
  );
}

export default Header;
