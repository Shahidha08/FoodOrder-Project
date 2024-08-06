import {
  legacy_createStore as createStore, //object container or array container
  combineReducers, //combines objects with different values into a single combined reducer
  applyMiddleware, //to use any middleware(action->middleware(some actions)->reducer)
  compose, //to read the function from right to left
} from "redux";
import thunk from "redux-thunk"; //helps to run data fetching(does some delayed work)
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer";
import { authReducer } from "./reducer/userReducer";

const reducer = combineReducers({
  restaurants: restaurantReducer,
  menus: menuReducer,
  auth: authReducer,
});
//redux and react app,allow multiple store enhancer in a row, adding redux dev tools
const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(
  reducer,
  composeenhancers(applyMiddleware(...middleware))
); //enhances multiple store

export default store;
