import compareItem from 'all-about-vr-compare';
import {
  ADD_MAPPING,
  REMOVE_MAPPING,
  ADD,
  REMOVE,
  DO_COMPARE,
  COMPARE_MODE_ON,
  COMPARE_MODE_OFF,
} from '../types';

export const MAX_SELECT = 2;

const initialState = {
  selected: {},
  inputMapping: [...Array(MAX_SELECT).keys()].reduce(
    (acc, item) => ({
      ...acc,
      [item]: null,
    }),
    {},
  ),
  selectedIds: [],
  compareMode: false,
  compareResult: {},
};

export default function compare(state = initialState, action) {
  switch (action.type) {
    case ADD_MAPPING: {
      const newInputMapping = { ...state.inputMapping };
      if (action.selectorIndex) {
        newInputMapping[action.selectorIndex] = action.item;
      } else {
        const emptyKey = Object.keys(newInputMapping).find((key) => newInputMapping[key] === null);
        if (emptyKey) {
          newInputMapping[emptyKey] = action.item;
        }
      }
      return {
        ...state,
        inputMapping: newInputMapping,
      };
    }

    case REMOVE_MAPPING: {
      const newInputMapping = { ...state.inputMapping };
      if (action.selectorIndex) {
        newInputMapping[action.selectorIndex] = null;
      } else {
        const indexToDelete = Object.keys(newInputMapping).find((key) => {
          if (newInputMapping[key] === null) {
            return false;
          }
          return newInputMapping[key].id === action.id;
        });
        newInputMapping[indexToDelete] = null;
      }
      return {
        ...state,
        inputMapping: newInputMapping,
      };
    }

    case ADD: {
      const { selected } = state;
      let { selectedIds } = state;
      if (selectedIds.length !== MAX_SELECT) {
        selectedIds = [...selectedIds, action.item.id];
        selected[action.id] = action.item;
      }
      return {
        ...state,
        selected,
        selectedIds,
      };
    }

    case REMOVE: {
      const { selected } = state;
      const { selectedIds } = state;
      const index = selectedIds.indexOf(action.id);
      if (index > -1) {
        selectedIds.splice(index, 1);
      }
      delete selected[action.id];
      return {
        ...state,
        selected,
        selectedIds,
      };
    }

    case COMPARE_MODE_ON:
      return {
        ...state,
        compareMode: true,
      };

    case COMPARE_MODE_OFF:
      return {
        ...state,
        compareResult: {},
        compareMode: false,
      };

    case DO_COMPARE:
      return {
        ...state,
        compareResult: compareItem(Object.values(state.selected)),
      };

    default:
      return state;
  }
}
