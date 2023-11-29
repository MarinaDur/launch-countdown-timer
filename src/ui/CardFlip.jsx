import { styled, css } from "styled-components";

const CardFlip = styled.div`
  .flip-card .top-flip {
    height: 0.75em;
    line-height: 1;
    padding: 0.25em;
    overflow: hidden;
    background-color: orange;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    position: absolute;
    animation: flip-top 250ms ease-in;
    transform-origin: bottom;
  }
  .flip-card .bottom-flip {
    height: 0.75em;
    line-height: 1;
    padding: 0.25em;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: blue;
    display: flex;
    align-items: flex-end;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    animation: flip-bottom 250ms ease-out 250ms;
    transform: rotateX(90deg);
    transform-origin: top;
  }
`;

export default CardFlip;
