import { styled, css } from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr 1fr;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas: "." "content" "." "footer";
`;

export default GridContainer;
