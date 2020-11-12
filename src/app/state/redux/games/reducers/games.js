import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
  INVALIDE_GAMES,
} from '../types';

const initialState = {
  items: [],
  isFetching: false,
  isLoaded: false,
  fatalError: false,
  errorMessage: '',
};

export default function games(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GAMES:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_GAMES:
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        items: action.games,
      };

    case INVALIDE_GAMES:
      return {
        ...state,
        isFetching: false,
        fatalError: true,
        errorMessage: action.message || '',
      };

    default:
      return state;
  }
}
