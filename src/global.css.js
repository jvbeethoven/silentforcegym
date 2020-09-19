import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
    color: #fff;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: #fff;
    background-color: #303030;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accent};
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }

  .gallery-title {
    font-size: 20px;
    padding: 4rem 0 2rem 4rem;
  }

  footer {
    display: grid;
    max-width: 100vw;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding: 2rem;
    margin: 2rem;
    align-self: center;
  }

  h2 {

    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 2rem;
    font-weight: 900;
  }

  p {
    max-width: 70rem;
    line-height: 2.4rem;
  }

  .explanation {
    margin: 2rem 2rem 0 2rem;
    padding: 2rem 2rem 0 2rem;
  }

  table {
    max-width: 120rem;
    min-width: 40vw;
    text-align: center;
    margin-bottom: 4rem;
    border: 2px solid white;
  }
  table td, table th {
    padding: 1rem .5rem;
    border: 2px solid white;
  }
  table tbody td {
    font-size: 13px;
  }
  table thead {
    }
  table thead th {
    font-weight: bold;
    text-align: center;
  }
  table tfoot {
    font-weight: bold;
  }

  .prijslijst-div {
    padding: 2rem;
    margin: 2rem;
  }

  .trainingsuren {
    display: flex;
    margin: 2rem;
    padding: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 60vw;

    &-subcontainer {
      padding: 0 2rem 0  2rem;
    }

    &-title {
      font-size: 2.6rem;
      font-weight: 400;
    }
  }

  @media (max-width: 40em) {
    footer {
      display: block;
    } 
  }

  @media (max-width: 1140px) {
    .trainingsuren-title {
      width: 80vw;
    } 
  }
`;
