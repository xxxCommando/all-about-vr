import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxCookiesMiddleware, { getStateFromCookies } from 'redux-cookies-middleware';
import headsetsReducer from './state/redux/headsets/reducers';
import compareReducer from './state/redux/compare/reducers';
import allAboutVRcombine from './state/redux/all-about-vr/reducers';
import { COOKIE_DARK_MODE_NAME } from './state/redux/all-about-vr/reducers/darkMode';
import gamesReducer from './state/redux/games/reducers';
import rootSaga from './state/sagas';

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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(sagaMiddleware, reduxCookiesMiddleware(cookiesPaths))),
);

// need to remove : redux-tunk et firebase
sagaMiddleware.run(rootSaga);

export default store;
