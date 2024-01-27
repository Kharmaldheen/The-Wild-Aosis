import { css, styled } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 700;

      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 700;

      @media screen and (max-width: 768px) {
        font-size: 1.8rem;
        text-align: center;
      }
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
      @media only screen and (max-width: 768px) {
        font-size: 2rem;
      }
    `}

  line-height:1.4;
`;

export default Heading;
