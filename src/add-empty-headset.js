const firebase = require('firebase');

require('dotenv').config();

const apiKey = process.env.REACT_APP_APIKEY;
const authDomain = process.env.REACT_APP_AUTHDOMAIN;
const databaseURL = process.env.REACT_APP_DATABASEURL;
const projectId = process.env.REACT_APP_PROJECTID;
const storageBucket = process.env.REACT_APP_STORAGEBUCKET;
const messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID;
const appId = process.env.REACT_APP_APPID;
const measurementId = process.env.REACT_APP_MEASUREMENTID;

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

firebase.initializeApp(config);

const data = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
  name: 'Casque VR',
  index: 123456789,
  price: 123456789,
};

const id = process.argv[2];

if (id !== undefined && id.length !== 0) {
  firebase.firestore().collection('headsets').doc(id).set(data)
    .then(() => {
      console.log(`${id} added`);
      process.exit();
    })
    .catch(() => process.exit());
} else {
  console.log('No id params');
  process.exit();
}
