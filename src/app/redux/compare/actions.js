import * as types from './types';

export const addMapping = (item, selectorIndex = null) => ({
  type: types.ADD_MAPPING,
  item,
  selectorIndex,
});
export const removeMapping = (id, selectorIndex = null) => ({
  type: types.REMOVE_MAPPING,
  id,
  selectorIndex,
});
export const add = (item, id) => ({ type: types.ADD, item, id });
export const remove = (id) => ({ type: types.REMOVE, id });

export const setCompareMode = (bool) => (bool
  ? { type: types.COMPARE_MODE_ON } : { type: types.COMPARE_MODE_OFF });

export const doCompare = () => ({ type: types.DO_COMPARE });

export const doClear = () => ({ type: types.DO_CLEAR });
