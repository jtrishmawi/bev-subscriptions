import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Auth0Provider } from "@auth0/auth0-react";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-family: 'Noto Sans', sans-serif;
    overflow: hidden;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Auth0Provider
      domain="dev-u2clydb2.eu.auth0.com"
      clientId="a3mi01imTynRP8aUUtYPHVm3taGPgi87"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
