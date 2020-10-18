import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
  INVALIDE_GAMES,
} from '../types';

const initialState = {
  collectionRef: null,
  formatedGame: [],
  isFetching: false,
  isLoaded: false,
  fatalError: false,
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
        collectionRef: action.gamesRef,
        formatedGame: action.gamesRef.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })),
      };

    case INVALIDE_GAMES:
      return {
        ...state,
        isFetching: false,
        fatalError: true,
      };

    default:
      return state;
  }
}
