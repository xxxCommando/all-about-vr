import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import headsetsReducer from './redux/headsets/reducers';

const rootReducer = combineReducers({
  ...headsetsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
