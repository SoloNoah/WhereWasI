import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { loginReducer, registerReducer, profileReducer, exploreReducer, selectedShowReducer } from './reducers';
const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  profileReducer,
  selectedShowReducer,
  exploreReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
