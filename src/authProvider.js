import { MsalAuthProvider, LoginType } from 'react-aad-msal';

// Msal Configurations
const config = {
  auth: {
    authority: process.env.REACT_APP_AUTHORITY_LINK,
    clientId: process.env.REACT_APP_AZURE_ACTIVE_DIRECTORY_CLIENT_ID,
    redirectUri: process.env.REACT_APP_REDIRECT_URL
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};

// Authentication Parameters
const authenticationParameters = {
  scopes: [
    'user.read'
  ]
}

// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)