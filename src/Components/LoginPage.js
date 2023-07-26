
import React from 'react'

export function LoginPage(props) {


    return (
        <>
            <div>
                <h3>Sign in to your account</h3>
                <form className='m-auto' action="#" id="loginPage" method="POST">
                    <div className="form-row">
                        <div className="p-2">
                            <input type="email" className="form-control" placeholder="Enter email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="p-2">
                            <input type="password" className="form-control" placeholder="Enter password" name="password" id="password" />
                        </div>
                    </div>
                    {/* SHOW ADMIN KEY INPUT OR NOT */}
                    {/* {
                        props.showKeyBox && <div className="form-row">
                            <div className="p-2">
                                <input type="password" className="form-control" placeholder="Enter admin key" name="adminKey" id="password" />
                            </div>
                        </div>
                    } */}
                    {/* <!-- Submit Button --> */}
                    <div className="form-row">
                        <div className="p-2">
                            <button type="submit" className="btn1" id="loginButton">
                                Login
                            </button>
                        </div>
                    </div>
                    {/* <!-- REDIRECTION TO SIGN UP PAGE (onClick={props.handleSingUpBtnClick(false)} ) --> */}
                    {/* onClick={() => { props.handleSingUpBtnClick(true) }} */}
                    <p className="m-auto">
                        Don't have an account? <a href="/">Register Here</a>
                    </p>
                    <p className="m-auto">
                        <a href="signup.html">Forgot Password ?</a>
                    </p>
                </form>
            </div>

        </>
    )
}
