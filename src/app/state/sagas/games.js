import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../redux/games/types';
import GamesApi from '../../api/games';

export function* fetchGames() {
  try {
    const games = yield call(GamesApi.get);
    yield put({ type: types.RECEIVE_GAMES, games });
  } catch (e) {
    yield put({ type: types.INVALIDE_GAMES, message: e.message });
  }
}

export function* gamesSaga() {
  yield takeEvery(types.REQUEST_GAMES, fetchGames);
}
