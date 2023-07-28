

import React, { useState } from 'react'

export default function Pizza(props) {

    const [variant, SetVariant] = useState("small");
    const [quantity, SetQuantity] = useState(1);
    const [showDesc, setShowDesc] = useState(false);

    const handleOpenShow = () => {
        setShowDesc(!showDesc)
    }

    const handleCloseShow = () => {
        setShowDesc(!showDesc)
    }

    return (
        <>
            <div className="pizzaBox shadow-lg p-3 bg-white rounded" style={{ margin: "32px" }}>
                <div className="mb-2">
                    <h4 onClick={handleOpenShow}>{props.pizza.name}</h4>
                    <img onClick={handleOpenShow} src={props.pizza.image} className='dsahboardImg img-fluid mx-auto' alt="No pizza image" />
                </div>
                <div className="d-flex mb-2">
                    <div className="varientsBox me-2 w-100">
                        <p>Varients: </p>
                        <select className='mb-2 form-control' value={variant} onChange={(e) => { SetVariant(e.target.value) }} >
                            {props.pizza.varients.map(varnt => {
                                return <option value={varnt}>{varnt}</option>
                            })}
                        </select>
                    </div>

                    <div className="quantityBox w-100">
                        <p>Quantity: </p>
                        <select className='mb-2 form-control' value={quantity} onChange={(e) => { SetQuantity(e.target.value) }} >
                            {[...Array(10).keys()].map((object, index) => {
                                return <option value={index + 1}>{index + 1}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="d-flex">
                    <div className='mt-1 w-100' style={{ marginRight: "3px" }}>
                        <h6>Price: {props.pizza.prices[0][variant] * quantity} Rs/-</h6>
                    </div>

                    <div className='w-100'>
                        <button className="btn btn-danger btn-sm">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div >
            {/* MODAL CODE */}

            {showDesc && (
                <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{props.pizza.name}</h4>
                                <button type="button" className="btn-close" onClick={handleCloseShow} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={props.pizza.image} style={{ width: "20vw", height: "40vh" }} className='dsahboardImg img-fluid mx-auto' alt="No pizza image" />
                                <h5>Category: {props.pizza.category}</h5>
                                <h5>Description: {props.pizza.description}</h5>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" onClick={handleCloseShow}>
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
