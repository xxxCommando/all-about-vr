import * as types from './types';
import { doClear } from '../compare/actions';

export function fetchHeadsets() {
  return {
    type: types.REQUEST_HEADSETS,
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
