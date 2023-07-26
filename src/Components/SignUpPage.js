
import React, { useState } from 'react'

export function SignUpPage(props) {

    const [showSignUp, setShowSignUp] = useState(false);

    const handleCloseShow = () => {
        setShowSignUp(!showSignUp)
    }

    return (
        <>
            {showSignUp &&
                <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Sign Up</h4>
                                <button type="button" className="btn-close" onClick={handleCloseShow} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <h3>Make your account</h3>
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
                                        <div className="form-row">
                                            <div className="p-2">
                                                <input type="password" className="form-control" placeholder="Confirm password" name="password" id="password" />
                                            </div>
                                        </div>
                                        {/* <!-- Submit Button --> */}
                                        <div className="form-row">
                                            <div className="p-2">
                                                <button type="submit" className="btn1" id="loginButton">
                                                    Add Acount
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" onClick={handleCloseShow}>
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}