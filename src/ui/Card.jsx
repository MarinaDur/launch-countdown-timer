import { styled, css } from "styled-components";

const Card = styled.div`
  height: 3rem;
  width: 65px;
  /* line-height: 1.5; */
  padding: 0.75rem;
  overflow: hidden;
  font-size: 3rem;
  color: hsl(var(--color-soft-red));
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 4.1rem;
    height: 4.5rem;
    padding: 1.4rem;
    width: 90px;
  }
  @media (min-width: 1200px) {
    font-size: 5.5rem;
    height: 5.2rem;
    padding: 1.05rem;
    width: 110px;
  }

  ${(props) =>
    props.flip === "top" &&
    css`
      /* display: flex;  */
      /* /* justify-content: center; */
      position: absolute;
      /* background-color: orange; */
      background-color: hsl(var(--color-dark-desaturated-blue) / 0.7);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      animation: flip-top 250ms ease-in;
      transform-origin: bottom;

      /* display: ${(props) => (props.isFlipCardVisible ? "flex" : `none`)}; */
    `}

  ${(props) =>
    props.flip === "bottom" &&
    css`
      background-color: hsl(var(--color-dark-desaturated-blue) / 0.8);

      /* background-color: blue; */
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: flex-end;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      animation: flip-bottom 250ms ease-out 250ms;
      transform: rotateX(90deg);
      transform-origin: top;
      justify-content: center;
      /* display: ${(props) => (props.isFlipCardVisible ? "flex" : `none`)}; */
    `}

    @keyframes flip-top {
    100% {
      transform: rotateX(90deg);
    }
  }
  @keyframes flip-bottom {
    100% {
      transform: rotateX(0deg);
    }
  }
`;

export default Card;
