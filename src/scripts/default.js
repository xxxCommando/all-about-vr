const firebase = require('firebase');

const data = {
  audience: 2,
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

module.exports = data;
