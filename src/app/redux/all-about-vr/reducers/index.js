import {
  combineReducers,
} from 'redux';
import mainClass from './mainClass';
import darkMode from './darkMode';

const allAboutVrCombine = combineReducers({
  mainClass,
  darkMode,
});

export default allAboutVrCombine;
