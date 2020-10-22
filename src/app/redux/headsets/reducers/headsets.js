import {
  REQUEST_HEADSETS,
  RECEIVE_HEADSETS,
  INVALIDE_HEADSETS,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
} from '../types';

const initialState = {
  collectionRef: null,
  formatedHeadset: [],
  isFetching: false,
  isLoaded: false,
  fatalError: false,
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
        collectionRef: action.headsetsRef,
        formatedHeadset: action.headsetsRef.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })),
      };

    case INVALIDE_HEADSETS:
      return {
        ...state,
        isFetching: false,
        fatalError: true,
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
