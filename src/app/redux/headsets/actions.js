import firebase from 'firebase/app';
import 'firebase/firestore';
import * as types from './types';

function requestHeadsets() {
  return {
    type: types.REQUEST_HEADSETS,
  };
}

function receiveHeadsets(headsetsRef) {
  return {
    type: types.RECEIVE_HEADSETS,
    headsetsRef,
  };
}

function catchHeadsets() {
  return {
    type: types.INVALIDE_HEADSETS,
  };
}

export function fetchHeadsets() {
  return function (dispatch) {
    dispatch(requestHeadsets());
    return firebase
      .firestore()
      .collection('headsets')
      .orderBy('index')
      .get()
      .then((response) => dispatch(receiveHeadsets(response)))
      .catch(() => dispatch(catchHeadsets()));
  };
}
