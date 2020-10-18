import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reduxCookiesMiddleware, { getStateFromCookies } from 'redux-cookies-middleware';
import headsetsReducer from './redux/headsets/reducers';
import compareReducer from './redux/compare/reducers';
import allAboutVRcombine from './redux/all-about-vr/reducers';
import { COOKIE_DARK_MODE_NAME } from './redux/all-about-vr/reducers/darkMode';
import gamesReducer from './redux/games/reducers';

let initialState = {
  allAboutVR: {
    darkMode: {
      darkMode: false,
    },
  },
};

const cookiesPaths = {
  'allAboutVR.darkMode.darkMode': {
    name: COOKIE_DARK_MODE_NAME,
  },
};

initialState = getStateFromCookies(initialState, cookiesPaths);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ...gamesReducer,
  ...headsetsReducer,
  ...compareReducer,
  allAboutVR: allAboutVRcombine,
});

export default createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk, reduxCookiesMiddleware(cookiesPaths))),
);
