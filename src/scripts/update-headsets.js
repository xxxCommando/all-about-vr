const firebase = require('firebase');
const defaultData = require('./default');

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
  .collection('headsets')
  .get()
  .then((querySnapshot) => {
    // create a list of async tasks to do
    Promise.all(querySnapshot.docs.map((doc) => doc.ref.update({
      ...defaultData,
      ...doc.data(),
    })))
      .then(() => {
        // after all tasks end => exit prossess
        console.log('updated');
        process.exit();
      })
      .catch(() => {
        console.log('error during update');
        process.exit();
      });
  });
