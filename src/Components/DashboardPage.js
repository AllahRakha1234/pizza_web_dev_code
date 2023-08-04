
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pizzas from './DashboardComponents/Pizzas';
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from '../actions/actions';
import CustomPizzaPage from './CustomPizzaPage';
import CartPage from './CartPage';

export default function DashboardPage() {

    // const location = useLocation();
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.addToCartReducer);
    const [flagCartPizzaShow, setFlagCartPizzaShow] = useState(1);
    const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : "No User";
    // console.log("current user: ", currentUser);
    // const handleDashboardCartpageBtn = () => {
    //     setFlagCartPizzaShow(!flagCartPizzaShow);
    // }

    return (
        <>
            <div style={{ height: "5vh" }}>
                <div id='badgeBox'>
                    {flagCartPizzaShow === 1 && <span className="badge p-2 text-bg-primary" >Click on Image or Title to see description!</span>}
                </div>
            </div>
            <nav className="container navbar navbar-expand-lg navbar-info bg-info shadow bg-info rounded mt-4 p-3">
                <div className="container-fluid">
                    <div className='d-flex fd-row w-100%'>
                        <h3 className='text-dark mt-1'><b>Welcome {currentUser.name}</b></h3>
                    </div>
                    <div className="d-flex w-100%">
                        <button className="btn btn-danger mx-2"
                            onClick={() => setFlagCartPizzaShow(1)}>
                            <b>Dashboard</b>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => setFlagCartPizzaShow(2)}>
                            <b>Cart Page: {cartState.cartItems.length}</b>
                        </button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => setFlagCartPizzaShow(3)}>
                            <b>Custom Pizza</b>
                        </button>
                    </div>
                </div>
            </nav>
            {/* SHOWING DASHBOARD OR CART OR CUSTOMEPIZZA PAGE LOGIC */}
            {
                flagCartPizzaShow === 1 ?
                    <Pizzas /> : flagCartPizzaShow === 2 ?
                        <CartPage /> : <CustomPizzaPage />
            }
        </>
    )
}
