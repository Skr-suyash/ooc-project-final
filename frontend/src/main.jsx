import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ggjlb600kirf0xja.us.auth0.com"
    clientId="h1ijkCCbpGyUTcf5qwd2EuCDaFbaW8MD"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
