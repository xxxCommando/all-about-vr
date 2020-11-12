// const firebase = require('firebase');
// const data = require('./default');

// require('dotenv').config();

// const config = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// firebase.initializeApp(config);

// const id = process.argv[2];

// if (id !== undefined && id.length !== 0) {
//   firebase
//     .firestore()
//     .collection('headsets')
//     .doc(id)
//     .set(data)
//     .then(() => {
//       console.log(`${id} added`);
//       process.exit();
//     })
//     .catch(() => process.exit());
// } else {
//   console.log('No id params');
//   process.exit();
// }
