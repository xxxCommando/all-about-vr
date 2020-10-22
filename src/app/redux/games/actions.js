import firebase from 'firebase/app';
import 'firebase/firestore';
import * as types from './types';

export function requestGames() {
  return {
    type: types.REQUEST_GAMES,
  };
}

export function receiveGames(gamesRef) {
  return {
    type: types.RECEIVE_GAMES,
    gamesRef,
  };
}

export function catchGames() {
  return {
    type: types.INVALIDE_GAMES,
  };
}

export function fetchGames() {
  return (dispatch) => {
    dispatch(requestGames());
    return firebase
      .firestore()
      .collection('games')
      .orderBy('index')
      .get()
      .then((response) => dispatch(receiveGames(response)))
      .catch(() => dispatch(catchGames()));
  };
}
