
import '../index.css'
import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import logoImg from '../assets/images/logo1.png';
import { LoginPage } from './LoginPage';
import { SignUpPage } from './SignUpPage';
import { useSelector, useDispatch } from "react-redux";
import { toggleTrue, toggleFalse } from "../actions/loginBtnAction"

export default function Navbar() {

    const [showLogin, setShowLogin] = useState(false);
    const [showKeyBox, setShowKeyBox] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const myState = useSelector((state) => state.ChangeLoginBtnBoolValue);
    const dispatch = useDispatch();

    // console.log(myState);
    // dispatch(toggleTrue);
    // console.log(myState);

    const handleOpenLoginShow = () => {
        // if (txt === "admin") {
        //     setShowKeyBox(true);
        //     console.log("Admin", showKeyBox);
        // }
        // else {
        //     setShowKeyBox(false);
        //     console.log(showKeyBox);

        // }
        // setShowLogin(!showLogin)
        dispatch(toggleTrue());
    }

    const handleClosLoginShow = () => {
        // setShowLogin(!showLogin)
        dispatch(toggleFalse())
    }

    const handleSingUpBtnClick = (isClick) => {
        if (isClick) {
            setShowSignUp(true)
            setShowLogin(false)
        }
        else {
            setShowSignUp(false)
        }
        // console.log("Clicked");
    }


    // ********* RENDER **********

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className='d-flex fd-row w-100%'>
                        <img src={logoImg} id='logo' style={{ height: "45px", width: "65px", marginRight: "8px" }} alt="" />
                        <a className="navbar-brand text-dark" href="home"><h4 className='text-light mt-1'>Pizza Hut</h4></a>
                    </div>
                    <div className="d-flex w-100%">
                        {/* <button onClick={() => { handleOpenLoginShow("admin") }} className="btn btn-outline-light mx-2">Admin Login</button> */}
                        <button onClick={handleOpenLoginShow} className="btn btn-outline-light mx-2">Admin Login</button>
                        {/* <button onClick={() => { handleOpenLoginShow("user") }} className="btn btn-outline-light">User Login</button> */}
                        <button onClick={handleOpenLoginShow} className="btn btn-outline-light">User Login</button>
                    </div>
                </div>
            </nav>
            {/* MODAL CODE */}

            {myState && (
                <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title">Login Page</h2>
                                <button type="button" className="btn-close" onClick={handleClosLoginShow} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* <LoginPage handleSingUpBtnClick={handleSingUpBtnClick} showKeyBox={showKeyBox} /> */}
                                <LoginPage />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" onClick={handleClosLoginShow} >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//     title: "Set title here"
// }