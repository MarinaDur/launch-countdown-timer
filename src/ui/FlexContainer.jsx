import { styled, css } from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  gap: ${(props) => (props.$gap ? `${props.$gap}rem` : "1rem")};
  flex-direction: ${(props) => (props.$flex ? `${props.$flex}` : "row")};
  align-items: ${(props) => props.$align && `${props.$align}`};

  @media (min-width: 768px) {
    gap: ${(props) => (props.$gapTablet ? `${props.$gapTablet}rem` : "2rem")};
  }
`;

export default FlexContainer;
