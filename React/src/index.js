import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Main from './Main';
// import { Provider } from "react-redux";
// import { store } from './components/Day 26 to 27 Redux/store';
import ErrorBound from "./components/Day 25 formOptimise/errrorBoundry/ErrorBound";
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.css';


// import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ErrorBound >
      <Auth0Provider
        domain="dev-jp38c2goe2do62sa.us.auth0.com"
        clientId="PzNFqzMgmCwziW3mwXKZx0n86VHpqetA"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <App />
      </Auth0Provider>
    </ErrorBound>

    {/* 
    <Provider store={store}>
      <Main />
    </Provider> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
