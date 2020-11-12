import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../redux/headsets/types';
import HeadsetsApi from '../../api/headsets';

export function* fetchHeadsets() {
  try {
    const headsets = yield call(HeadsetsApi.get);
    yield put({ type: types.RECEIVE_HEADSETS, headsets });
  } catch (e) {
    yield put({ type: types.INVALIDE_HEADSETS, message: e.message });
  }
}

export function* headsetsSaga() {
  yield takeEvery(types.REQUEST_HEADSETS, fetchHeadsets);
}
