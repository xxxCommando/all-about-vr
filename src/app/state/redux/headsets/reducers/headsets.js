import {
  REQUEST_HEADSETS,
  RECEIVE_HEADSETS,
  INVALIDE_HEADSETS,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
} from '../types';

const initialState = {
  items: [],
  isFetching: false,
  isLoaded: false,
  fatalError: false,
  errorMessage: '',
  isFiltered: false,
  visibilityFilter: {
    outDatated: true,
    comingSoon: true,
    brands: [],
    platforms: [],
    audience: 'all',
    priceMin: 0,
    priceMax: 5800,
  },
};

export default function headsets(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HEADSETS:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_HEADSETS:
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        items: action.headsets,
      };

    case INVALIDE_HEADSETS:
      return {
        ...state,
        isFetching: false,
        fatalError: true,
        errorMessage: action.message || '',
      };

    case UPDATE_FILTERS: {
      return {
        ...state,
        isFiltered: true,
        visibilityFilter: {
          ...state.visibilityFilter,
          ...action.filters,
        },
      };
    }

    case CLEAR_FILTERS: {
      return {
        ...state,
        isFiltered: false,
        visibilityFilter: {
          ...initialState.visibilityFilter,
        },
      };
    }

    default:
      return state;
  }
}
