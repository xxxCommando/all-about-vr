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
  audio: true,
  brand: 'xxx',
  description: 'xxx',
  flipup: true,
  fov: 0,
  img: 'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
  img2: 'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
  img3: 'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
  img4: 'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
  img5: 'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
  index: 123456789,
  ipd: true,
  mic: true,
  name: `Casque VR ${Math.floor(Math.random() * Math.floor(1000000))}`,
  pixeldensity: 0,
  price: 123456789,
  refreshrate: 0,
  releasedate: Date.now(),
  requirement: 'computer',
  res: '1000x1000',
  screetype: 'OLED',
  summary: "I'm a super VR Headset",
  think: 'Nice headset',
  tracking: 'Station',
  weight: 0,
  wireless: false,

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
