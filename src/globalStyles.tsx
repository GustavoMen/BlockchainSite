import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Exo 2', sans-serif;
    max-width: 100vw;
}

#root {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
`;

export default GlobalStyle;
