import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --main-color: #012856;
  --secondary-color: #40C4FF;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fff;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #fafafa;
}
`;

export default GlobalStyle