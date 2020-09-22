import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import headsetsReducer from './redux/headsets/reducers';
import compareReducer from './redux/compare/reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ...headsetsReducer,
  ...compareReducer,
});

export default createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
