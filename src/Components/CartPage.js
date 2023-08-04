
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction, deleteFromCart } from "../actions/actions";

export default function CartPage() {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.addToCartReducer);
    const cartItems = cartState.cartItems;
    const totalPayment = cartItems.reduce((initailValue, item) => initailValue + item.price, 0);
    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ width: "47vw" }}>
                <h1 className='cartMsg bg-secondary text-light p-3' style={{ margin: "140px 0" }}>Nothing to Show in the Cart</h1>
            </div>
        )
    }
    return (
        <>
            <div className="container">
                <div className="paymentInfo container shadow p-3 bg-white rounded mt-4">
                    <h1>Payment Info</h1>
                    <div className='d-flex flex-row justify-content-between'>
                        <h2 className='mt-2'>Total: {totalPayment} Rs/-</h2>
                        <button className="btn btn-primary" style={{ height: "40px" }}>
                            <b>Pay Now</b>
                        </button>
                    </div>
                </div>
                {
                    cartItems.map((item, index) => {
                        return (
                            <div className="container d-flex flex-row shadow p-3 bg-white rounded my-4" key={index}>
                                <div className="col-lg-7">
                                    <h2>{item.name}</h2>
                                    <h5>
                                        Quantity: &nbsp;
                                        <button style={{ backgroundColor: "red", borderRadius: "50%" }}
                                            onClick={() => dispatch(addToCartAction(item, item.quantity - 1, item.variant))}
                                        >
                                            ➖
                                        </button>
                                        &nbsp; {item.quantity} &nbsp;
                                        <button style={{ backgroundColor: "#25e603", borderRadius: "50%" }}
                                            onClick={() => dispatch(addToCartAction(item, item.quantity + 1, item.variant))}>
                                            ➕
                                        </button>
                                    </h5>
                                    <h5>Variant: {item.variant}</h5>
                                    {/* <h5>Price: {item.prices[0][item.variant] * item.quantity} Rs/-</h5> */}
                                    <h5>Price: {item.price} Rs/-</h5>
                                    {/* <button className="btn btn-danger">Delete Item</button> */}
                                </div>
                                <div className="col-lg-3 ">
                                    <img className='rounded'
                                        style={{ width: "150px", height: "140px" }}
                                        src={item.image} alt={item.name} />
                                </div>
                                <div className="col-lg-2">
                                    <button className="btn btn-primary ms-5 mt-5 p-2"
                                        onClick={() => dispatch(deleteFromCart(item))}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
