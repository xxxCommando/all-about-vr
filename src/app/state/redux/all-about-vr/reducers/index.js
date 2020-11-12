import {
  combineReducers,
} from 'redux';
import darkMode from './darkMode';

const allAboutVrCombine = combineReducers({
  darkMode,
});

export default allAboutVrCombine;
