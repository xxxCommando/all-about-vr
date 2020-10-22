import firebase from 'firebase/app';
import 'firebase/firestore';
import * as types from './types';
import { doClear } from '../compare/actions';

export function requestHeadsets() {
  return {
    type: types.REQUEST_HEADSETS,
  };
}

export function receiveHeadsets(headsetsRef) {
  return {
    type: types.RECEIVE_HEADSETS,
    headsetsRef,
  };
}

export function catchHeadsets() {
  return {
    type: types.INVALIDE_HEADSETS,
  };
}

export function fetchHeadsets() {
  return (dispatch) => {
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

export function updateFilters(filters) {
  return ((dispatch) => {
    dispatch(doClear());
    return dispatch({
      type: types.UPDATE_FILTERS,
      filters,
    });
  });
}

export function clearFilters() {
  return {
    type: types.CLEAR_FILTERS,
  };
}
