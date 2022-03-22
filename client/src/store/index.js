import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
