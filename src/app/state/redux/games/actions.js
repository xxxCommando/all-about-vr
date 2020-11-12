import * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export function fetchGames() {
  return {
    type: types.REQUEST_GAMES,
  };
}
