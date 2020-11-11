import { all } from 'redux-saga/effects';
import { gamesSaga } from './games';
import { headsetsSaga } from './headsets';

export default function* rootSaga() {
  yield all([
    gamesSaga(),
    headsetsSaga(),
  ]);
}
