import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-gop37obgcywx3sqh.us.auth0.com"
    clientId="APEnSBeV2GopTPeuGuXIJ6Av2LUIhGIb"
    authorizationParams={{
      redirect_uri: window.location.origin + '/account'
    }}
  >
    <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
