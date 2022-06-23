import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev--knulw3f.eu.auth0.com"
    clientId="9i7s7G5M2z6BNF2Durmar6uRqalA6VeB"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);


