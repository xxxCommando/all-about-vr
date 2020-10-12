const firebase = require('firebase');
const data = require('./default');

require('dotenv').config();

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

firebase.initializeApp(config);

firebase
  .firestore()
  .collection('test').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      doc.ref.update({
        ...doc.data,
        ...data,
      });
    });
  });
