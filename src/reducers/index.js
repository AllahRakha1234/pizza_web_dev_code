import changeLoginBoolValue from "./loginBtnReducer";
import changeSignUpBoolValue from "./signupBtnReducer";
import getAllPizzasReducer from './getAllPizzasReducer';
import getAllPizzaGradientsReducer from './getAllPizzaGradientsReducer';
import showLoginOrLogoutBtnReducer from "./showLoginOrLogoutBtnReducer";
import addToCartReducer from "./addToCartReducer";
import signupUserReducer from "./signupUserReducer";
import loginUserReducer from "./loginUserReducer"
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeLoginBoolValue: changeLoginBoolValue,
    changeSignUpBoolValue: changeSignUpBoolValue,
    getAllPizzasReducer: getAllPizzasReducer,
    getAllPizzaGradientsReducer: getAllPizzaGradientsReducer,
    showLoginOrLogoutBtnReducer: showLoginOrLogoutBtnReducer,
    addToCartReducer: addToCartReducer,
    signupUserReducer: signupUserReducer,
    loginUserReducer: loginUserReducer
    // ChangeLoginBtnBoolValue
});



export default rootReducer;