import customerReducer from "./customer-reducer";
import billpaymentReducer from "./bp-reducer";
import { combineReducers } from "redux";
import LoginReducer from "./login-reducer";

const rootReducer = combineReducers({
  customer: customerReducer,
  bpdetais: billpaymentReducer,
  login: LoginReducer,
 
});


export default rootReducer;