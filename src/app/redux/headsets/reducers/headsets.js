import {
  REQUEST_HEADSETS,
  RECEIVE_HEADSETS,
  INVALIDE_HEADSETS,
} from '../types';

const initialState = {
  collectionRef: null,
  formatedHeadset: [],
  isFetching: false,
  isLoaded: false,
  fatalError: false,
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

    default:
      return state;
  }
}
