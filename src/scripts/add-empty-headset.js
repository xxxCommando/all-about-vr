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
  fov: Math.floor(Math.random() * Math.floor(100)),
  img: 'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
  imgs: [
    'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61fgwdI0C3L._AC_SL1200_.jpg',
  ],
  index: Math.floor(Math.random() * Math.floor(2000)),
  ipd: true,
  mic: true,
  name: `Casque VR ${Math.floor(Math.random() * Math.floor(2000))}`,
  pixeldensity: Math.floor(Math.random() * Math.floor(1000)),
  price: Math.floor(Math.random() * Math.floor(2000)),
  refreshrate: Math.floor(Math.random() * Math.floor(200)),
  releasedate: firebase.firestore.FieldValue.serverTimestamp(),
  requirements: {
    os: ['windows', 'linux', 'android', 'macos'],
    cpu: ' Intel i5 4590 / AMD Ryzen 5 1500X or greater.',
    gpu: 'Nvidia GeForce GTX 1060 / AMD Radeon RX 480 or greater.',
    ram: 8,
    usb: '3.0',
    video: 'Display Port',
  },
  resolution: {
    x: Math.floor(Math.random() * Math.floor(10000)),
    y: Math.floor(Math.random() * Math.floor(10000)),
  },
  screentype: 'OLED',
  status: 1,
  summary: "I'm a super VR Headset",
  think: 'Nice headset',
  tracking: 'Station',
  weight: Math.floor(Math.random() * Math.floor(1000)),
  wireless: false,
  pushedContents: [
    {
      text: 'blabla',
      img: 'url',
      right: true,
    },
    {
      text: 'blabla',
      img: 'url',
      right: true,
    },
    {
      text: 'blabla',
      img: 'url',
      right: true,
    },
  ],
};

const id = process.argv[2];

if (id !== undefined && id.length !== 0) {
  firebase
    .firestore()
    .collection('headsets')
    .doc(id)
    .set(data)
    .then(() => {
      console.log(`${id} added`);
      process.exit();
    })
    .catch(() => process.exit());
} else {
  console.log('No id params');
  process.exit();
}
