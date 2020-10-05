import {
  TOGGLE_DARK_MODE,
} from '../types';

export const COOKIE_DARK_MODE_NAME = 'all-about-vr-dark-mode';

const initialState = {
  darkMode: false,
};

export default function darkMode(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE: {
      document.body.classList = !state.darkMode ? ['dark'] : ['light'];
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }

    default:
      return state;
  }
}
