import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setSignUpBtnBoolValue } from "../actions/actions"
import { setLoginBtnBoolValue } from "../actions/actions"
import { showLoginOrLogoutBtnAction } from "../actions/actions"
import { loginUserAction } from '../actions/actions';

export function LoginPage(props) {

    const dispatch = useDispatch();
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginState = useSelector(state => state.loginUserReducer);
    const resFromDbForLogin = loginState.resFromDbForLogin;
    console.log("resFromDbForLogin", resFromDbForLogin);

    const handleSignUpBtnClick = () => {
        dispatch(setSignUpBtnBoolValue());
        // dispatch(setLoginBtnBoolValue());
    }

    // SERVER CODE TO SEND DATA TO DB

    const handleLoginBtn = (event) => {
        event.preventDefault();
        dispatch(loginUserAction({ email, password }));
        // try {
        //     if (resFromDbForLogin.msg === "Exist") {
        //         dispatch(setLoginBtnBoolValue());
        //         dispatch(showLoginOrLogoutBtnAction());
        //         // history("/dashboard");
        //         // history("/dashboard", { state: { id: "Ali" } });
        //     }
        //     // else if (resFromDbForLogin.msg === "NotExist") {
        //     //     alert("Email 📩 or Password 🔑 is Incorrect !");
        //     // }
        // }
        // catch (error) {
        //     alert("Error Occur: ", error);
        // }
    }

    // useEffect(() => {
    //     if (resFromDbForLogin.msg === "Exist") {
    //         dispatch(setLoginBtnBoolValue());
    //         dispatch(showLoginOrLogoutBtnAction());
    //     }
    // }, [dispatch])


    // ********* REDNER *********

    return (
        <>
            <div>
                <h3>Sign in to your account</h3>
                <form className='m-auto' action="POST" id="loginPage" method="POST">
                    <div className="form-row">
                        <div className="p-2">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="p-2">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" name="password" id="password" />
                        </div>
                    </div>
                    {/* SHOW ADMIN KEY INPUT OR NOT */}
                    {
                        props.showKeyBox && <div className="form-row">
                            <div className="p-2">
                                <input type="password" className="form-control" placeholder="Enter admin key" name="adminKey" id="adminKey" />
                            </div>
                        </div>
                    }
                    {/* <!-- Submit Button --> */}
                    <div className="form-row">
                        <div className="p-2">
                            <button onClick={handleLoginBtn} className="btn1" id="loginButton">
                                Login
                            </button>
                        </div>
                    </div>
                    {/* <!-- REDIRECTION TO SIGN UP PAGE --> */}
                    <p className="m-auto">
                        Don't have an account? <button onClick={handleSignUpBtnClick} className='makeBtnLinkUtility'>Register Here</button>
                    </p>
                    <p className="m-auto">
                        <a href="signup.html">Forgot Password ?</a>
                    </p>
                </form>
            </div>

        </>
    )
    // }
}
