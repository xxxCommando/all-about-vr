import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

//using dotenv to manage env variable

require("dotenv").config();

let apiKey = process.env.REACT_APP_APIKEY;
let authDomain = process.env.REACT_APP_AUTHDOMAIN;
let databaseURL = process.env.REACT_APP_DATABASEURL;
let projectId = process.env.REACT_APP_PROJECTID;
let storageBucket = process.env.REACT_APP_STORAGEBUCKET;
let messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID;
let appId = process.env.REACT_APP_APPID;
let measurementId = process.env.REACT_APP_MEASUREMENTID;

const config = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
