import styled, { createGlobalStyle } from "styled-components";
import "./assets/fonts/Gilroy-Medium.ttf";
import { screenSizes } from "./shared/helpers/themes";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html{    
    box-sizing: border-box;
    font-family: Gilroy;
    font-weight: 500;
    font-size: 15px;
    background-color: #E5E5E5;
    color: #292D45;
    @media screen and (min-width: ${screenSizes.tablet}px){    
    font-size: 20px;    
    position: sticky;
  };
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figcaption,
  figure,
  blockquote,
  dl dd {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  max-width: 1600px;
  box-shadow: 0px 0px 4px rgba(136, 136, 136, 0.24);
  background-color: #fff;
  margin: 0 auto;
  border-radius: 8px;
  padding: 24px 16px;
`;
