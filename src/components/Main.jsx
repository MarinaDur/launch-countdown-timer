import { styled, css } from "styled-components";
import GridContainer from "../ui/GridContainer";
import Header from "./Header";
import Footer from "./Footer";

const StyledMain = styled(GridContainer)`
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
  justify-items: center;
`;

function Main() {
  return (
    <StyledMain>
      <Header />
      <Footer />
    </StyledMain>
  );
}

export default Main;
