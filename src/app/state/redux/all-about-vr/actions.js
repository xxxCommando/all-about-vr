import * as types from './types';

export const toggleMainClass = (className) => ({
  type: types.TOGGLE_MAIN_CLASS,
  className,
});

export const toggleDarkMode = () => ({
  type: types.TOGGLE_DARK_MODE,
});
