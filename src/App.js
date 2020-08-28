import React from 'react';
import './App.css';
import * as firebase from 'firebase';

function App() {
  // get elements
  const oculusRiftObject = document.getElementById('oculusRift');
  const htcViveObject = document.getElementById('htcVive');

  // create references
  const dbRefOculusRift = firebase.database().ref().child('oculusrift');
  const dbRefHtcVive = firebase.database().ref().child('htcvive');

  // sync object change
  dbRefOculusRift.on('value', (snap) => {
    oculusRiftObject.innerText = JSON.stringify(snap.val(), null, 3);
  });
  dbRefHtcVive.on('value', (snap) => {
    htcViveObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

  return (
    <div className="App">
      <header />
    </div>
  );
}

export default App;
