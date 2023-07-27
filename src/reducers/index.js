import changeLoginBoolValue from "./loginBtnReducer";
import changeSignUpBoolValue from "./signupBtnReducer"
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeLoginBoolValue: changeLoginBoolValue,
    changeSignUpBoolValue: changeSignUpBoolValue
    // ChangeLoginBtnBoolValue
});


export default rootReducer;