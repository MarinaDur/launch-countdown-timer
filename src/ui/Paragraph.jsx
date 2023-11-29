import { styled, css } from "styled-components";

const Paragraph = styled.p`
  font-size: clamp(0.8rem, 1vw, 1rem);
  letter-spacing: 3px;
  color: hsl(var(--color-grayish-blue));
  text-transform: uppercase;
`;

export default Paragraph;
