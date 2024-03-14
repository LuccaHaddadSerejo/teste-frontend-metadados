import { keyframes } from "styled-components";

export const ModalFadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const CardFadeIn = keyframes`
0% {
  -webkit-transform: scale(0);
          transform: scale(0);
  opacity: 1;
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
  opacity: 1;
}`;

export const CardCartFadeIn = keyframes`
  0% {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
`;
