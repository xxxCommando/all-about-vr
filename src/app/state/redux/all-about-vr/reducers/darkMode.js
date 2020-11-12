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
      document.body.classList = !state.darkMode ? ['dark'] : [''];
      const metaThemeColor = document.querySelector('meta[name=theme-color]');
      metaThemeColor.setAttribute('content', state.darkMode ? '#1890ff' : '#503D4D');
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }

    default:
      return state;
  }
}
