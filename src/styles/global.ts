import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary-base: rgba(255, 111, 97);
    --color-primary75: rgba(255, 111, 97, 0.75);
    --color-primary50: rgba(255, 111, 97, 0.50);
    --color-primary25: rgba(255, 111, 97, 0.25);
    --color-primary10: rgba(255, 111, 97, 0.10);
    --color-primary5: rgba(255, 111, 97, 0.05);

    --color-black-base: rgba(30, 40, 50);
    --color-black75: rgba(30, 40, 50, 0.75);
    --color-black50: rgba(30, 40, 50, 0.50);
    --color-black25: rgba(30, 40, 50, 0.25);
    --color-black10: rgba(30, 40, 50, 0.10);
    --color-black5: rgba(30, 40, 50, 0.05);

    --color-white-base: rgba(255, 255, 255);
    --color-white75: rgba(255, 255, 255, 0.75);
    --color-white50: rgba(255, 255, 255, 0.50);
    --color-white25: rgba(255, 255, 255, 0.25);
    --color-white10: rgba(255, 255, 255, 0.10);
    --color-white5: rgba(255, 255, 255, 0.05);

    --color-dark-base: rgba(0, 0, 0);
    --color-dark75: rgba(0, 0, 0, 0.75);
    --color-dark50: rgba(0, 0, 0, 0.50);
    --color-dark25: rgba(0, 0, 0, 0.25);
    --color-dark10: rgba(0, 0, 0, 0.10);
    --color-dark5: rgba(0, 0, 0, 0.05);

    --color-stroke: rgba(227, 227, 227);

    --font-size-1000: 74px;
    --font-size-950: 67px;
    --font-size-900: 50px;
    --font-size-850: 37px;
    --font-size-800: 34px;
    --font-size-750: 30px;
    --font-size-700: 29px;
    --font-size-650: 28px;
    --font-size-600: 26px;
    --font-size-550: 21px;
    --font-size-500: 18px;
    --font-size-450: 16px;
    --font-size-400: 14px;
    --font-size-350: 12px;

    --font-style-roboto: "Roboto", sans-serif;
    --font-style-opensans: "Open Sans", sans-serif;

    --font-weight-bold: 700;
    --font-weight-semibold: 600;
    --font-weight-medium: 500;
    --font-weight-normal: 400;
  }  

  * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
  }

  body,html{
    width: 100%;
    min-height: 100vh;
  }

  a{
    color: unset;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;
