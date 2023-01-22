import 'modern-normalize';
import styled from 'styled-components';

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
   body {
//   margin: 0;
//   padding: 15px;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }
// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }
// ul {
//   list-style: none;
//   text-decoration: none;
//   padding: 0;
//   margin: 0;
// }
// h1,
// h2,
// h3 {
//   margin: 0;
// }
// p {
//   margin: 0;
// }
// img {
//   display: block;
//   max-width: 100%;
//   width: 100%;
//   height: auto;
// }
`

export const Wrap = styled.div` 
    max-width: 800px;
    margin: auto;    
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 20px;
    `
