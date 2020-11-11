import * as types from './types';

export function fetchGames() {
  return {
    type: types.REQUEST_GAMES,
  };
}
