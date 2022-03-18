import { createGlobalStyle } from 'styled-components/macro';

const FontsGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "gt-eesti";
    src: url('/fonts/GT-Eesti-Display-Light.eot') format("embedded-opentype"),
      url(${'/fonts/GT-Eesti-Display-Light.ttf'}) format("woff"),
      url(${'/fonts/GT-Eesti-Display-Light.woff'}) format("truetype");
  }

  @font-face {
    font-family: "gt-eesti";
    font-weight: bold;
    src: url('/fonts/GT-Eesti-Display-Medium.eot') format("embedded-opentype"),
      url(${'/fonts/GT-Eesti-Display-Medium.ttf'}) format("woff"),
      url(${'/fonts/GT-Eesti-Display-Medium.woff'}) format("truetype");
  }
`;

export default FontsGlobalStyle;
