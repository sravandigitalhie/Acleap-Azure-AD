import React from 'react';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { authProvider } from "./authProvider";
import App from '../../App';

function Login() {
  return (
    <div className="App">
      <AzureAD provider={authProvider}>
      </AzureAD>

      <AzureAD provider={authProvider} forceLogin={true}>
        {
        ({ login, logout, authenticationState, error, accountInfo }) => {
          switch (authenticationState) {
            case AuthenticationState.Authenticated:
              return (
                <p>
                  <span>Welcome, {accountInfo.account.userName}!</span>
                  {/* <span>{accountInfo.jwtIdToken}</span> */}
                  <button onClick={logout}>Logout</button>
                </p>
              );
            case AuthenticationState.Unauthenticated:
              return (
                <div>
                  {error && (
                    <p>
                      <span>
                        An error occured during authentication, please try
                        again!
                      </span>
                    </p>
                  )}
                  <p>
                    <span>Hey stranger, you look new!</span>
                    <button onClick={login}>Login</button>
                  </p>
                </div>
              );
            case AuthenticationState.InProgress:
              return <p>Authenticating...</p>;
          }
        }}
      </AzureAD>
      <App></App>
    </div>
  );
}
export default Login;
